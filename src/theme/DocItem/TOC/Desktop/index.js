import React from 'react';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TOC from '@theme/TOC';
export default function DocItemTOCDesktop() {
  const {toc, frontMatter} = useDoc();


  return (
    <div className='toc-main'>
      <TOC
        toc={toc}
        minHeadingLevel={frontMatter.toc_min_heading_level}
        maxHeadingLevel={frontMatter.toc_max_heading_level}
        className={ThemeClassNames.docs.docTocDesktop}
      />
      <div className='toc-chat'>
        <h2>Попробовать в чате</h2>
        <iframe src="https://www.twitch.tv/embed/JEIPEY/chat?darkpopout&parent=JEIPEY.github.io" height="500" width="100%"></iframe>
      </div>
    </div>
  );
}