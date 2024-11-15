export async function GET() {
    return Response.json({ test: '12345' });
}

export async function POST(request: Request){
    const results = await request.json();

    console.log(results);
    return Response.json({ results });
}