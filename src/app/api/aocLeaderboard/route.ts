export async function POST(request: Request){
    const results = await request.json();

    console.log(results);
    return Response.json({ results });
}