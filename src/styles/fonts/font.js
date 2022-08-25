import { createGlobalStyle } from "styled-components";

import NanumGothic from "./NanumGothic.woff";
import NanumGothicBold from "./NanumGothicBold.woff";
import DoHyeonRegular from "./DoHyeon-Regular.ttf";
import NotoSansKr from "./NotoSansKR-Regular.otf";
import NotoSansKrBold from "./NotoSansKR-Bold.otf";

export default createGlobalStyle`
    
    @font-face {
        font-family : "NanumGothic Demo";
        src : local("NanumGothic"),
        url(${NanumGothic}) format('truetype');
        font-weight : normal;
    }

    @font-face {
        font-family : "NanumGothicBold Demo";
        src : local("NanumGothicBold"),
        url(${NanumGothicBold}) format('truetype');
        font-weight : bold;
    }

    @font-face {
        font-family : "DoHyeonRegular";
        src : local("DoHyeonRegular"), 
        url(${DoHyeonRegular}) format('truetype');
        font-weight : normal;
    }

    @font-face {
        font-family : "Noto Sans Kr";
        src : local("NotoSansKr"), 
        url(${NotoSansKr}) format('truetype');
        font-weight : normal;
    }

    @font-face {
        font-family : "Noto Sans Kr Bold";
        src : local("NotoSansKrBold"), 
        url(${NotoSansKrBold}) format('truetype');
        font-weight : bold;
    }

`