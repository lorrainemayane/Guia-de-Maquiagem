const produtos = [
    {
        nome: "Batom Vermelho",
        descricao: "Um batom clássico e marcante para qualquer ocasião.",
        link: "https://www.boticario.com.br/dicas-de-beleza/todo-mundo-tem-o-tom-de-batom-vermelho-perfeito-descubra-o-seu/",
        tags: ["batom vermelho", "batom", "vermelho"]
    },
    {
        nome: "Batom Nude",
        descricao: "Um batom neutro e secaixa  para qualquer ocasião.",
        link: "https://www.maybelline.com.br/dicas-de-maquiagem/labios/batom/batom-nude",
        tags: ["batom neutro", "batom", "nude"]
    },
    {
        nome: "Sombra Glitter",
        descricao: "Dê brilho ao seu olhar com essa sombra incrível.",
        link: "https://www.boticario.com.br/dicas-de-beleza/maquiagem-com-glitter-dicas-e-inspiracoes-para-brilhar-em-qualquer-ocasiao/",
        tags: ["sombra glitter", "glitter", "sombra"]
    },
    {
        nome: "Hidratante",
        descricao: "Produto essencial para manter a pele saudável e preparada para a maquiagem.",
        link: "https://www.cerave.com.br/todos-os-produtos/creme-hidratante?gad_source=1&gclid=Cj0KCQjw8--2BhCHARIsAF_w1gwvgGBk6f8YIJjqvSBnSSc5GJkzPL4cLAH4HwSyW_r04UFAx3PkfsgaAq9dEALw_wcB",
        tags: ["hidratante", "hidratacao"]
    },
    {
        nome: "Base",
        descricao: "Uniformiza a pele e prepara a base para os outros produtos de maquiagem.",
        link: "https://beyoung.com.br/blog/base-de-maquiagem/?srsltid=AfmBOoozKYeuIvsfLVobNSptfPv0mQogVHbkqAbNX3GU9M4U_nm5pEmR",
        tags: ["base", "base liquida", "base para maquiagem"]
    },
    {
        nome: "Pó facial",
        descricao: "Finaliza a maquiagem e ajuda a controlar o brilho da pele.",
    
        link: "https://www.importsmdm.com.br/po-facial-kiko-milano-invisible-touch-face-fixing-powder?srsltid=AfmBOoqOsgC-v2GV7JX9VfgRvC8aFgVdH-lgK-zmiSs5m9MsUrHMgzcI://exemplo.com/po-facial",
        tags: ["Po","po facial", "po", "maquiagem"]
    },
    {
        "nome": "Lápis de Olhos",
        "descricao": "Delimita os olhos e preenche a linha d'água. Aplicar diretamente na linha d'água ou na pálpebra superior e inferior.",
        "link": "https://www.boticario.com.br/dicas-de-beleza/como-fazer-delineado-gatinho-sem-errar/?gad_source=1&gclid=Cj0KCQjw8--2BhCHARIsAF_w1gyyLfzYec4TtiI8glqVSPN-jXeTA5jZCIwBIvCt0Rnfmh8y_g79sK4aAn9QEALw_wcB://www.boticario.com.br/dicas-de-beleza/lapis-de-olho-tudo-sobre-esse-item-multifuncional/?gad_source=1&gclid=Cj0KCQjw8--2BhCHARIsAF_w1gxhUokaNb3Y9lJFHUV2b9eAjsxAUJgCuzJ9cYGO_cxiexjIst05ZRoaAoYaEALw_wcBs://exemplo.com/lapis-de-olhos",
        "tags": ["lapis de olhos", "olhos", "maquiagem", "delinear"]
    },
    {
        nome: "Corretivo",
        descricao: "Ideal para esconder imperfeições e olheiras, Deixa uma cobertura perfeita.",
        link: "https://www.boticario.com.br/busca/?q=corretivo",
        tags: ["corretivo", "olheiras", "imperfeicoes"]
    },
   
    {
        nome: "Contorno",
        descricao: "Usado para definir os traços do rosto e criar profundidade.",
        link: "https://www.boticario.com.br/maquiagem/rosto/bronzer-e-contorno/",
        tags: ["contorno", "definicao", "rosto"]
    },
    {
        nome: "Blush",
        descricao: "Dá um ar saudável às bochechas, acrescentando cor ao rosto.",
        link: "https://www.boticario.com.br/maquiagem/rosto/blush/",
        tags: ["blush", "bochechas", "cor"]
    },
    {
        nome: "Máscara de cílios",
        descricao: "Define e alonga os cílios, dando destaque ao olhar.",
        link: "https://www.belezanaweb.com.br/maquiagem/olhos/mascara-de-cilios/",
        tags: ["mascara de cilios", "cilios", "mascara"]
    },
    {
        nome: "Paleta de sombras neutra",
        descricao: "Ideal para criar looks versáteis e suaves para o dia a dia.",
        link: "https://exemplohttps://br.shein.com/pdsearch/paletas%20de%20sombras?url_from=bradgs11_srsa_BeautyHealthTestNoID_onelink01_20240808&gad_source=1&word_type=20&gclid=Cj0KCQjw8--2BhCHARIsAF_w1gy6MAG2DHa_YOO0In6pXJ0rDR1QU2kc8sG2yzRq7q0RmBCrPxCb9IQaAgCUEALw_wcB&adid=708299088408&pf=GOOGLE&requestId=523701146444857611&setid=164099461325&kwd=kwd-19472670701&cid=21549184935.com/paleta-sombras-neutra",
        tags: ["paleta sombras neutra", "sombras neutras", "paleta"]
    },
    {
        "nome": "Primer Facial",
        "descricao": "Prepara a pele para a maquiagem, prolongando a durabilidade e proporcionando um acabamento mais uniforme. Aplicar antes da base.",
        "link": "https://exemhttps://www.eudora.com.br/maquiagem/rosto/primer/plo.com/primer-facial",
        "tags": ["primer", "maquiagem", "pele", "preparo"]
    },
    {
        "nome": "Fixador de Maquiagem",
        "descricao": "Sela a maquiagem, evitando que borre ou derreta. Borrifar sobre o rosto após finalizar a maquiagem.",
        "link": "https:https://www.belezanaweb.com.br/maquiagem/rosto/fixador/?&activebpp=nb&utm_source=google&utm_medium=cpc&target=kwd-488483460232&utm_campaign=G:BLZ:Non-Brand-KW:Multicategory:Make-Up:Generic&gad_source=1&gclid=Cj0KCQjw8--2BhCHARIsAF_w1gxJ_29zrfGaK-n2qIb2uG9KfKfk2NN1kCUPrNzT3YqiqMOmc6enb1UaAlk0EALw_wcB&gclsrc=aw.ds//exemplo.com/fixador-de-maquiagem",
        "tags": ["fixador", "maquiagem", "durabilidade"]
    }
    ,
    {
        "nome": "Iluminador",
        "descricao": "Realça pontos estratégicos do rosto, como o arco do cupido e o canto interno dos olhos. Aplicar com pincel específico para iluminador.",
        "link": "https://www.boticario.com.br/maquiagem/rosto/iluminador/",
        "tags": ["iluminador", "maquiagem", "brilho"]
    }
    
];