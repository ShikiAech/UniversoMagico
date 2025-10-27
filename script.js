// Navegação e Funcionalidades Gerais
document.addEventListener('DOMContentLoaded', function() {
    // Controle do cardápio (filtros)
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const categorias = document.querySelectorAll('.categoria');
    
    if (filtroBtns.length > 0) {
        filtroBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove classe active de todos os botões
                filtroBtns.forEach(b => b.classList.remove('active'));
                // Adiciona classe active ao botão clicado
                this.classList.add('active');
                
                // Esconde todas as categorias
                categorias.forEach(cat => cat.classList.remove('active'));
                
                // Mostra a categoria correspondente
                const categoriaId = this.getAttribute('data-categoria');
                const categoriaAlvo = document.getElementById(categoriaId);
                if (categoriaAlvo) {
                    categoriaAlvo.classList.add('active');
                }
            });
        });
    }
    
    // Validação do formulário de reservas
    const formReserva = document.getElementById('formReserva');
    if (formReserva) {
        formReserva.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validações básicas
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const data = document.getElementById('data').value;
            const hora = document.getElementById('hora').value;
            const lugares = document.getElementById('lugares').value;
            
            if (!nome || !telefone || !data || !hora || !lugares) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Simulação de envio
            alert('Reserva enviada com sucesso! Entraremos em contato para confirmação.');
            formReserva.reset();
        });
    }
    
    // Validação de telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            
            if (value.length > 10) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/(\d{0,2})/, '($1');
            }
            
            e.target.value = value;
        });
    }
    
    // Validação de data (não permitir datas passadas)
    const dataInput = document.getElementById('data');
    if (dataInput) {
        const hoje = new Date().toISOString().split('T')[0];
        dataInput.min = hoje;
    }
});

// Efeitos visuais
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona efeito de hover nas imagens da galeria
    const galeriaItens = document.querySelectorAll('.galeria-item img');
    galeriaItens.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});