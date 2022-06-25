import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

const MarkdownBox = styled.div`
  line-height: 1.2;
  > * {
    margin-bottom: 10px;
  }
  ul {
    li {
        list-style: disc;
        list-style-position: inside;
    }
  }
`;

type Props = {
  markdown: string,
};

function Markdown({ markdown }: Props) {
  return (
    <MarkdownBox>
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </MarkdownBox>
  );
}

export default Markdown;
