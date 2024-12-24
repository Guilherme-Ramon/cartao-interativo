window.onload = function () {
    Swal.fire({
        title: "ATENÇÃO!",
        text: "Não insira dados reais do seu cartão de crédito. Este formulário é apenas para testes.",
        icon: "warning",
        background: "#ff4d4d",
        color: "#fff",
        confirmButtonText: "Fechar",
        confirmButtonColor: "#ff1a1a",
        backdrop: `rgba(0, 0, 0, 0.5)`,
    });

    function digitosCartao() {
        let digitos = document.getElementById("entradaNumero").value;
        digitos = digitos.replace(/\D/g, ""); 
        let numeroFormatado = digitos.replace(/(\d{4})(?=\d)/g, "$1 ");
        document.getElementById("entradaNumero").value = numeroFormatado;
        document.getElementById("numeroCartao").innerHTML = numeroFormatado;
    }

    function nomeUser() {
        let nomeUsuario = document.getElementById("entradaTitular").value;

        nomeUsuario = nomeUsuario.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]/g, "");
        document.getElementById("entradaTitular").value = nomeUsuario;
        document.getElementById("nomeTitular").innerHTML = nomeUsuario;
    }

    function dataValidade() {
        let dataCartao = document.getElementById("entradaValidade").value;
        dataCartao = dataCartao.replace(/\D/g, ""); 

        if (dataCartao.length > 2) {
            dataCartao = dataCartao.slice(0, 2) + "/" + dataCartao.slice(2, 4); 
        }

        document.getElementById("entradaValidade").value = dataCartao;
        document.getElementById("validacaoCartao").innerHTML = dataCartao;
    }

    function confirmarDados() {
        const entradaNumero = document.getElementById("entradaNumero").value.trim();
        const entradaTitular = document.getElementById("entradaTitular").value.trim();
        const entradaValidade = document.getElementById("entradaValidade").value.trim();

        if (!entradaNumero || entradaNumero.length < 19) {
            Swal.fire({
                title: "Erro!",
                text: "O número do cartão deve ser preenchido corretamente.",
                icon: "error",
                background: "#ff4d4d",
                color: "#fff",
                confirmButtonText: "Fechar",
                confirmButtonColor: "#ff1a1a",
            });
            return;
        }

        if (!entradaTitular || entradaTitular === "Nome Completo") {
            Swal.fire({
                title: "Erro!",
                text: "O nome do titular deve ser preenchido.",
                icon: "error",
                background: "#ff4d4d",
                color: "#fff",
                confirmButtonText: "Fechar",
                confirmButtonColor: "#ff1a1a",
            });
            return;
        }

        if (!entradaValidade || entradaValidade.length < 5 || !entradaValidade.includes("/")) {
            Swal.fire({
                title: "Erro!",
                text: "A validade do cartão deve ser preenchida corretamente.",
                icon: "error",
                background: "#ff4d4d",
                color: "#fff",
                confirmButtonText: "Fechar",
                confirmButtonColor: "#ff1a1a",
            });
            return;
        }

        Swal.fire({
            title: "Dados Confirmados!",
            icon: "success",
            background: "#4caf50",
            color: "#fff",
            confirmButtonText: "OK",
            confirmButtonColor: "#388e3c",
        });
    }

    document.getElementById("entradaNumero").onkeyup = digitosCartao;
    document.getElementById("entradaTitular").onkeyup = nomeUser;
    document.getElementById("entradaValidade").onkeyup = dataValidade;
    document.querySelector(".btn-confirmar").onclick = confirmarDados;
};