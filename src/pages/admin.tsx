import dynamic from 'next/dynamic';
import path from 'path';
import matter from 'gray-matter';
import { useState } from 'react';
import { marked } from 'marked';
import GetServerSideProps from 'next';
import 'react-markdown-editor-lite/lib/index.css';
import * as YAML from 'js-yaml';

// Dynamically import react-markdown-editor-lite
const MdEditor = dynamic(() => import('react-markdown-editor-lite'), { ssr: false });

interface EditorChangeObject {
  text: string;
}

interface AdminPageProps {
  initialMarkdown: string;
  frontMatter: Record<string, any>;
}

const AdminPage: React.FC<AdminPageProps> = ({ initialMarkdown, frontMatter: initialFrontMatter }) => {
  const [markdown, setMarkdown] = useState(initialMarkdown);
  const [frontMatter, setFrontMatter] = useState(initialFrontMatter);

  const handleEditorChange = ({ text }: EditorChangeObject) => {
    setMarkdown(text);
  };

  const handleFrontMatterChange = (key: string, value: any) => {
    setFrontMatter(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    // Stringify the front matter and prepend it to the markdown content
    const content = '---\n' + YAML.dump(frontMatter) + '---\n' + markdown;

    // Save the content to the server
    // You need to implement the server-side logic to handle this request
    await fetch('/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Admin Portal</h1>
      {Object.entries(frontMatter).map(([key, value]) => (
        <div key={key}>
          <label>{key}</label>
          <input 
            value={value} 
            onChange={e => handleFrontMatterChange(key, e.target.value)} 
          />
        </div>
      ))}
      <MdEditor 
        style={{ height: '500px' }}
        value={markdown} 
        onChange={handleEditorChange} 
        renderHTML={(text) => marked(text)}
      />
      <button 
        style={{ display: 'block', margin: '20px auto', padding: '10px 20px' }}
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const fs = require('fs');
  const filePath = path.join(process.cwd(), 'products', 'cake-topper-1.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  return {
    props: {
      initialMarkdown: content,
      frontMatter: data,
    },
  };
};

export default AdminPage;