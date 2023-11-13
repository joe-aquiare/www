import { SitePage } from "../../styles/siteStyles";
import CodeBlock from "../../components/_global/CodeBlock";


function HomePage() {

const codeString =
`// Force-set sprite
sprite_index = spr_obst_box_spawner;
image_index = 0;

st_box_spawn_direction = E_DIRECTIONS.UP;
r_box_spawn_freq = 120;
r_box_spawn_timer = 0;
r_box_move_speed = 1;

// Spawns a box in the curent spawn direction
f_spawn_box =  function(_st_direction, _r_speed) {
    with(instance_create_depth(x, y, depth - 1, obj_obst_box)) {
        st_direction = _st_direction;
        r_move_speed = _r_speed;
    }
}`;

    return (
        <SitePage>
            This is a test for the home page.
            <CodeBlock language="gml" code={codeString} />
        </SitePage>
    );
}
export default HomePage;