import { NextResponse } from "next/server";

interface ContactPayload {
  nome: string;
  contacto: string;
  mensagem: string;
}

function validate(payload: unknown): payload is ContactPayload {
  if (!payload || typeof payload !== "object") return false;

  const data = payload as Record<string, unknown>;

  return (
    typeof data.nome === "string" &&
    data.nome.trim().length > 0 &&
    typeof data.contacto === "string" &&
    data.contacto.trim().length > 0 &&
    typeof data.mensagem === "string" &&
    data.mensagem.trim().length > 0
  );
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!validate(body)) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 },
      );
    }

    const { nome, contacto, mensagem } = body;

    console.log(
      `[Contacto] Nova mensagem de "${nome}" (${contacto}): ${mensagem}`,
    );

    return NextResponse.json(
      { success: true, message: "Mensagem recebida com sucesso." },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Erro ao processar a mensagem. Tente novamente." },
      { status: 500 },
    );
  }
}
