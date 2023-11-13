import BlogBack from "../../../../components/_global/BlogBack";
import BlogHeader from "../../../../components/_global/BlogHeader";
import CodeBlock from "../../../../components/_global/CodeBlock";
import PageBreak from "../../../../components/_global/PageBreak";
import SiteImage from "../../../../components/_global/SiteImage";
import { BlogSection, ExternalLink, SiteBlog, SiteList, SiteListItem, TextBlock, TextHighlight } from "../../../../styles/siteStyles";

export const info_11_10_2023 = {
    title: "Interfacing with animation curves in GameMaker",
    subtitle: "And why you should care",
    date: "11-10-23",
    route: "11_10_23"
};

const codeBlock1 = 
`function curve_read(_animcurve, _posx, _wrap = false, _channels = []) {
	
    var result = {};

	// Check if supplied animation curve exists
	if(animcurve_exists(_animcurve)) {
	
        var all_channels = array_length(_channels) == 0;	// if no channels are supplied, read all of them
        
        // Get animation curve data
        var animcurve_data = animcurve_get(_animcurve);
        
        // Check if supplied animation curve is empty
        if(array_length(animcurve_data.channels) == 0) {
            return result;	
        }
        
        // Either wrap or clamp x position
        _posx = _wrap ? _posx mod 1 : clamp(_posx, 0, 1);
        
        // Get channel data from animation curve
        for(var channel_index = 0; channel_index < array_length(animcurve_data.channels); channel_index++) {
            
            // Get channel
            var channel = animcurve_data.channels[channel_index];
            
            // If we are evaluating all channels, or this channel was requested, add its data to the return struct
            if(all_channels || array_contains(_channels, channel.name)) {
                
                // Evaluate channel
                var channel_data = animcurve_channel_evaluate(channel, _posx);
                
                // Set evaluation to result struct
                variable_struct_set(result, channel.name, channel_data);

            }

        }

    }

	// Return result struct
	return result;
	
}`;

const codeBlock2 = 
`/// @desc CREATE
ani_timer = 0;
ani_speed = .04;`;

const codeBlock3 = 
`/// @desc STEP
ani_timer += ani_speed * DELTA_TIME;

// Tip: use this DELTA_TIME macro to approximate the built-in delta_time variable to 1:
// #macro DELTA_TIME ((delta_time * 3) / 50000)
// Just use frame-dependant 60fps numbers and tack this on as a multiplier. Easy!`;

const codeBlock4 = 
`/// @desc DRAW
var ani_data = curve_read(__gmcss_ac_test_1, ani_timer, true);

var x_scale = image_xscale;
var y_scale = image_xscale;

// Just safeguarding - ideally, if you are confident these will exist, 
// these checks are unecessary and you can just use ani_data.<var_name> raw
if(variable_struct_exists(ani_data, "image_xscale")) {
	x_scale *= ani_data.image_xscale;
}

if(variable_struct_exists(ani_data, "image_yscale")) {
	y_scale *= ani_data.image_yscale;
}

draw_sprite_ext(
	sprite_index,
	image_index,
	x,
	y,
	x_scale,
	y_scale,
	image_angle,
	c_white,
	image_alpha
);`;

function BlogPost_11_10_2023() {

    

    const info = info_11_10_2023;
    return (
        <SiteBlog>
            <BlogBack />
            <PageBreak />
            <BlogHeader title={info.title} subtitle={info.subtitle} date={info.date} />
            <BlogSection>An Into To Animation Curves</BlogSection>
            <TextBlock>
                Animation curves are an interesting and useful feature tucked away into the notorious "drag-and-drop" subset of user creation tools inside GameMaker. They allow us to define bezier curves for use inside our games mainly for, as you may have guessed, animating. In this blog entry I want to briefly expose to you the method which I use to extract data from these curves programmatically, not just for animation, but for many practical purposes.
            </TextBlock>
            <TextBlock>
                First off, let's look at what we're presented with when creating a curve:
            </TextBlock>
            <SiteImage src="/images/blog/11_10_2023/curves_gm_initial.png" />
            <TextBlock>
                As you can see, by default, a curve with two points and a slope of zero is created for us. This curve is contained in a <i>channel</i>, which is actually a curve <i>within</i> the initial curve we created. That might be confusing, but thankfully the only confusing part is the terminology. A single curve object can hold multile curves (<i>or "channels" as we just mentioned</i>), but right now we're only looking at a curve with a single channel named <TextHighlight>curve1</TextHighlight>. 
            </TextBlock>
            <TextBlock>
                if we wanted to, we can define multiple channels, which is what I've done here by pressing the "+" button in the upper-left corner of the window (I've also adjusted the values for visibility):
            </TextBlock>
            <SiteImage src="/images/blog/11_10_2023/curves_gm_multiple.png" />
            <TextBlock>
                We can now see multiple channels in the curve editor window: <TextHighlight>curve1</TextHighlight> in blue, <TextHighlight>curve2</TextHighlight> in red, and <TextHighlight>curve3</TextHighlight> in green. These curves aren't looking too curvy just yet, so let's change that. Clicking the dropdown arrow next to the <i>Curves</i> text in the top left will reveal a window called the <i>Animation Curve Library</i>. This is where you can select <ExternalLink href="https://easings.net" target="_blank">function presets</ExternalLink> for your curve chanels - you can see in the example below, selecting the <i>Elastic</i> option while the <TextHighlight>curve2</TextHighlight> channel was selected resulted in that channel taking the form of an elastic curve:
            </TextBlock>
            <SiteImage src="/images/blog/11_10_2023/curves_gm_elastic.png" />
            <TextBlock>
                So how do we actually go about using these curves in our code? I have a handy utility function that I use to extract the data from these curves, you can view <TextHighlight>curve_read()</TextHighlight> below: 
            </TextBlock>
            <CodeBlock language="gml" code={codeBlock1}></CodeBlock>
            <TextBlock>
                Let me explain each of the input parameters:
                <PageBreak />
                <TextHighlight>_animcurve</TextHighlight><br />
                ┗&nbsp;The animation curve you wish to read.<br /><br />
                <TextHighlight>_posx</TextHighlight><br />
                ┗&nbsp;The x position to read from the channel(s), from 0 to 1; 0 being the beginning, 1 the end.<br /><br />
                <TextHighlight>?:_wrap</TextHighlight><br />
                ┗&nbsp;An optional parameter that allows the _posx variable to wrap around from 1 to 0 rather than being clamped.<br /><br />
                <TextHighlight>?:_channels</TextHighlight><br />
                ┗&nbsp;An optional parameter of channel names to request from the curve. By default, an empty array requests all channels to be read.<br /><br />
                What is returned is a struct representing each of the channels requested and their y values at the provided x position along the curve. To implement this, I'm going to use this custom curve I've created below:
            </TextBlock>
            <SiteImage src="/images/blog/11_10_2023/curves_gm_custom.png" />
            <TextBlock>
                You can see that I've named the channels <TextHighlight>image_xscale</TextHighlight> and <TextHighlight>image_yscale</TextHighlight> respectively. When naming curve channels, it's reccomended to use names that match what they represent. In this case, I'm going to be applying the value of the first curve to a sprite's x scale, and applying the value of the second curve to a sprite's y scale, so these names fit well. 
            </TextBlock>
            <TextBlock>
                For the create event of our test implementation, I just have two simple variables representing a timer and a speed for the animation:
            </TextBlock>
            <CodeBlock language="gml" code={codeBlock2}></CodeBlock>
            <TextBlock>
                For the step event, I'm just incrementing that timer variable:
            </TextBlock>
            <CodeBlock language="gml" code={codeBlock3}></CodeBlock>
            <TextBlock>
                And for our bread and butter, the draw event, we're just reading the curve at our timer's position and applying the result to our temporary <TextHighlight>x_scale</TextHighlight> and <TextHighlight>y_scale</TextHighlight> variables.
            </TextBlock>
            <CodeBlock language="gml" code={codeBlock4}></CodeBlock>
            <TextBlock>
                And ta-da! We have... whatever this is.
            </TextBlock>
            <SiteImage src="/images/blog/11_10_2023/curves_gm_animated.gif" />
            <TextBlock>
                This is a fairly simple example, but you can probably think of many use cases that come from reading curves. Here are some tips I have for implementing this method:
            </TextBlock>
            <SiteList>
                <SiteListItem>
                    Your curves should majorly contain values on the y-axis from -1 to 1. Normalizing these values ensures that you can "stack" these animation values onto a single result variable. An example of this would be, if you want your character to have a "breathing" animation, but your character's scale is usually at 2x, don't have the curve osscilate between 1.8 and 2.2: instead, have the curve osscilate between .9 and 1.1 and multiply the curve value with their initial scale value at 2. That way, the curve's value multiplier will work as expected no matter what the scale of the object is at any given time.
                </SiteListItem>
                <SiteListItem>
                    Using curve channels as "properties" is a handy way to organize and visualize your animations before they are used in-game. The exmaple above is briefly using this method, But if you have a feeling that you're going to have to animate multiple properties (position offset, scale, rotation, alpha, etc...), it might be smart to do it in a single curve with channels for each of the properties you need. This makes iterating on the animations seamless, and lets you tweak everything in the same place. This of course falls apart if you need different timings for each property... but, the script above can be modified for doing that if needed. Or, of course, you can just fall back on using mulitple curve objects if your project calls for it.
                </SiteListItem>
                <SiteListItem>
                    Use the drop-downs next to each curve channel to edit the point values manually. This helps if you're reading a curve with a wrapped x-position timer value and you want to prevent it from hopping from 0.9999 to 1.0001, or something similar. You can just manually set both the beginning and end points to be exactly 1.
                </SiteListItem>
            </SiteList>
            <TextBlock>
                In the beginning, we spoke about how reading from these curves could be practical outside of just animation. Here are some use cases I've thought of (and applied in the past) for reading from curves in games:
            </TextBlock>
            <SiteList>
                <SiteListItem>
                    Defining character stat-progression in a JRPG. (maybe having channels per-stat?)
                </SiteListItem>
                <SiteListItem>
                    Defining thresholds for certain game properties: car acceleration, jump height, bullet travel time, etc.
                </SiteListItem>
                <SiteListItem>
                    Define a gradient for a weighted random number.
                </SiteListItem>
                <SiteListItem>
                    Define an input for use inside a shader.
                </SiteListItem>
                <SiteListItem>
                    Define the parameters for an in-game day/night cycle.
                </SiteListItem>
            </SiteList>
            <TextBlock>
                And those are just the ones that come to mind. I'm sure there are many more creative applications that I haven't thought of myself. Anyway, I hope this was helpful to some. As always, if you have questions, feel free to reach out via email or Twitter.
            </TextBlock>
            <TextBlock>
                Joe
            </TextBlock>
        </SiteBlog>
    );
}
export default BlogPost_11_10_2023;