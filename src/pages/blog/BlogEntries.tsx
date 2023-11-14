var BlogEntries: any = [];

// #region Blog entry #1
import BlogPost1 from "./entries/1";
import { info_1 } from "./entries/1";
BlogEntries.push({
    element:    BlogPost1,
    title:      info_1.title,
    subtitle:   info_1.subtitle,
    date:       info_1.date,
    route:      info_1.route,
});
// #endregion

export default BlogEntries;