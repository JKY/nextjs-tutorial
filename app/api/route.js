import data from "@/app/data/questions"
export async function GET(request) {
    return Response.json(data);
}