import Markdown from 'marked-react';

import './docs.css';

const mockgenDocs = `
# 🧪 Mock Data Schema Format

## Supported Types

- \`"name.fullName"\`: Full name
- \`"internet.email"\`: Email address
- \`"number|10-50"\`: Custom range
- \`"boolean"\`: true / false
- Arrays: \`["lorem.word"]\`
- Nested: 

\`\`\`json
{
  "user": {
    "name": "name.fullName",
    "email": "internet.email"
  }
}
\`\`\`

## Example

\`\`\`json
{
  "id": "number|1000-9999",
  "name": "name.fullName",
  "email": "internet.email",
  "isActive": "boolean"
}
\`\`\`
`;

const MockDataDocs = () => {
    return (
        <div className='custom-markdown'>
            <Markdown>{mockgenDocs}</Markdown>
        </div>
    );
}

export default MockDataDocs;