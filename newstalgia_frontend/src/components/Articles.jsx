import { useState } from "react";
import "./Articles.css";
import NewsArticle from "./newsArticle";

const Articles = () => {

  return (
    <div className="articles">
        <NewsArticle heading="shoot not the stars" authors="mark" content="skdjfkls sdlfjls jdf lj lsjdfskld sfdj sdj lksd klsj lsdklfj lsdkfskldfj ljsdlj ksldfjkljsdklfj kjdflj sfdlj lsdjf slkfjl jsdf jklsdjfjf sdljlsdkj dlkfjdsl jldjfldskjflskdj lsdjflkj sdlkjf lsjdkfjlsd lsdfj lksjflkjdlks jsdlkfj sldjf lsdkj lkdsjfl jsdl dslkfjdlj"/>
        <NewsArticle heading="shoot not the stars" authors="mark" content="skdjfkls sdlfjls jdf lj lsjdfskld sfdj sdj lksd klsj lsdklfj lsdkfskldfj ljsdlj ksldfjkljsdklfj kjdflj sfdlj lsdjf slkfjl jsdf jklsdjfjf sdljlsdkj dlkfjdsl jldjfldskjflskdj lsdjflkj sdlkjf lsjdkfjlsd lsdfj lksjflkjdlks jsdlkfj sldjf lsdkj lkdsjfl jsdl dslkfjdlj"/>

    </div>
  );
}

export default Articles;