// src/models/mahasiswaModel.js
import prisma from "../config/prisma";

// Mengambil semua data
export const getAll = async () => {
  return await prisma.mahasiswa.findMany();
};

// Mengambil data berdasarkan ID
export const getById = async (id) => {
  return await prisma.mahasiswa.findUnique({
    where: { id: parseInt(id) },
  });
};

// Menambahkan data baru
export const create = async (data) => {
  return await prisma.mahasiswa.create({
    data: {
      nama: data.nama,
      nim: data.nim,
    },
  });
};

// Memperbarui data
export const update = async (id, data) => {
  return await prisma.mahasiswa.update({
    where: { id: parseInt(id) },
    data: {
      nama: data.nama,
      nim: data.nim,
    },
  });
};

// Menghapus data
export const remove = async (id) => {
  return await prisma.mahasiswa.delete({
    where: { id: parseInt(id) },
  });
};