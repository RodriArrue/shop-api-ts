import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

async function connectDB() {
  try {
    await prisma.$connect();
    console.log(' Conectado a la base de datos');
  } catch (error) {
    if (error instanceof Error) {
      console.error(' Error al conectar a la base de datos:', error.message);
    } else {
      console.error('Error desconocido al conectar a la base de datos:', error);
    }
  }
}

connectDB();
