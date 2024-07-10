export default function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]')
    const botaoFechar = document.querySelector('[data-modal="fechar"]')
    const containerModal = document.querySelector('[data-modal="container"]')

    if(botaoAbrir && botaoFechar && containerModal) {
        
    
        function toggleModal() {
            
            containerModal.classList.toggle("ativo")
        }
    
        function ForaModal(event) {
            if(event.target === this) {
                toggleModal()
            }
        }
    
    
        botaoAbrir.addEventListener("click", toggleModal)
        botaoFechar.addEventListener('click', toggleModal)
        containerModal.addEventListener("click", ForaModal)
    
    }
    
}
