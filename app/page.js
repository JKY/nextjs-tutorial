import Submit from "@/app/components/submit"
import data from "@/app/data/questions"
import { CodeBlock } from 'geist/components'
const code = `function MyComponent(props) {
    return (
      <div>
        <h1>Hello, {props.name}!</h1>
        <p>This is an example React component.</p>
      </div>
    );
  }`;
export default async function Page() {
    /*
    const response = await fetch("http://localhost:3000/api/data");
    const data = await response.json();
    */
    //return <Submit data={data} />;
    return (
        <CodeBlock aria-label="Hello world" filename="Table.jsx" language="jsx">
          {code}
        </CodeBlock>
      )
}