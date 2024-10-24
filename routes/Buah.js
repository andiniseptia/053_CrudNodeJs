import express, { Router } from "express";

const router = express.Router();

const buah = [
    {
        nama: "Stroberi",
        warna: "Merah",
        rasa: "Asam",
        ukuran: "Kecil",
    },
    {
        nama: "Apel",
        warna: "Merah",
        rasa: "Manis",
        ukuran: "Sedang",
    },
    {
        nama: "Semangka",
        warna: "Merah",
        rasa: "Manis",
        ukuran: "Besar bgt",
    },
    {
        nama: "Mekon",
        warna: "Hijau",
        rasa: "Manis",
        ukuran: "Besar tapi gak bgt",
    },
];

router.get("/", (req, res) => {
    res.send(buah);
});

export default router;