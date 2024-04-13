export async function GET(request) {
    const { searchParams } = new URL(request.url);
    return Response.json({ "message": searchParams.get("id") });
}