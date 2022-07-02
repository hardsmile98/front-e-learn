import React, { useState } from 'react';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';

type Props = {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
};

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

function Editor({ value, setValue }: Props) {
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write');

  return (
    <ReactMde
      value={value}
      onChange={setValue}
      selectedTab={selectedTab}
      onTabChange={setSelectedTab}
      generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
    />
  );
}

export default Editor;
