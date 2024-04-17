import Submit from "@/app/components/submit"
import data from "@/app/data/questions"
export default async function Page() {
    /*
    const response = await fetch("http://localhost:3000/api/data");
    const data = await response.json();
    */
    return <Submit data={data} />;
}