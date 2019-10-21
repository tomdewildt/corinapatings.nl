import CMS from "netlify-cms-app";

import IndexPagePreview from "./previews/index-page";
import ContentPagePreview from "./previews/content-page";

CMS.registerPreviewTemplate( "index", IndexPagePreview );
CMS.registerPreviewTemplate( "kracht-inzicht", ContentPagePreview );
CMS.registerPreviewTemplate( "volwassenen", ContentPagePreview );
CMS.registerPreviewTemplate( "kinderen", ContentPagePreview );
CMS.registerPreviewTemplate( "opstellingen", ContentPagePreview );
CMS.registerPreviewTemplate( "hooggevoelig", ContentPagePreview );
