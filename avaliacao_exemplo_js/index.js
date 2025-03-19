let fishing_data = [];
let running = true 
const menu = `
=======================
MENU
=======================

0 -Finaliza
1- Cadastrar Pesca
2- Listar dados da Pesca
3- Relatório de Pagamento

Escolha: `;
while (running) {
    option = parseInt(prompt(menu));
    switch (option) {
        case 0:
            alert("Aplicação finalizada.");
            running = false;
            break;
        case 1:
            let fishing_date;
            let fishing_weight;
            let fishing_excess_weight;
            let new_fishing_day;
            fishing_date = prompt("Insira a data de sua pesca (DD/MM/AAAA): ");
            fishing_weight = parseFloat(prompt("Insira o peso total de suas pescas (Kg): "));
            fishing_excess_weight = fishing_weight>50 ? fishing_weight-50 : 0;
            new_fishing_day = {
                "date": fishing_date,
                "weight": fishing_weight,
                "excess": fishing_excess_weight
            };
            fishing_data.push(new_fishing_day);
            alert(`Seu registro de pesca do dia ${fishing_date} foi efetuado com sucesso!`)
            break;
        case 2:
            let title_line = "=".repeat(35);
            let table_line = "-".repeat(60);
            let table = `${title_line}\n|DATA                   |Peso (Kg)             |Excesso (Kg)         |\n${title_line}\n`;
            for (let i = 0; fishing_data.length>i; i++) {
                let date = String(fishing_data[i]["date"]);
                let weight = String(fishing_data[i]["weight"]);
                let excess = String(fishing_data[i]["excess"]);
                table = `${table}|${date.padEnd(19, " ")}|${weight.padEnd(26, " ")}|${excess.padEnd(28, " ")}|\n${table_line}\n`;
            }
            alert(table);
            break;
        case 3:
            let total_excess_weight = 0;
            let total_fine;
            let pay_fine;
            for (let i = 0; fishing_data.length>i; i++) {
                let excess = parseFloat(fishing_data[i]["excess"]);
                total_excess_weight += excess;
            }
            total_fine = total_excess_weight * 4;
            alert(`Total de peso excedido: ${total_excess_weight} kg\nTotal a pagar: R$${total_fine}`);
            pay_fine = prompt("Deseja efetuar o pagamento de todas multas(s/n)? ").trim().toLowerCase()
            if (pay_fine === "s") {
                fishing_data.length = 0;
                alert("Você efetuou o pagamento com sucesso!");
            }
            break;
    }
    prompt("Pressione ENTER para voltar ao menu.");
}

