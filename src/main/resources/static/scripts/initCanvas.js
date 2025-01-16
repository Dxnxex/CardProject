

   export function initCanvas() {

        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 800;
        canvas.height = 600;

        const saveBtn = document.getElementById("saveBtn");
        const moveBtn = document.getElementById("moveBtn");
        const xInput = document.getElementById("xInput");

        const yInput = document.getElementById("yInput");

        const img = new Image();
        img.src = "uploads/image.png";

        return {canvas, ctx, saveBtn, moveBtn, xInput, yInput, img};

    };
