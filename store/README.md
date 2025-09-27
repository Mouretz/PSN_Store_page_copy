 # 🏪 Store App (Angular)

Este projeto foi desenvolvido em **Angular** utilizando o [Angular CLI](https://github.com/angular/angular-cli) (v19.2.1).  
A aplicação é estruturada com **componentes reutilizáveis**, **páginas organizadas** e **navegação clara**.(Treino)
Se refere a Pagina da Playstation Store
---

## 📂 Estrutura do Projeto

store/
├── src/app/ # Código principal da aplicação
│ ├── components/ # Componentes reutilizáveis de UI
│ ├── pages/ # Diferentes rotas / páginas da aplicação
│ └── app.module.ts # Módulo principal
├── src/assets/ # Arquivos estáticos (imagens, ícones, etc.)
├── angular.json # Configuração do Angular CLI
├── package.json # Dependências e scripts


---

## 🧩 Componentes

### MenuBarComponent
- `menu-bar.component.ts` → Lógica da barra de navegação  
- `menu-bar.component.html` → Template da barra  
- `menu-bar.component.css` → Estilos da barra  

📌 Exibe o menu principal da aplicação, incluindo **logo** e **itens de navegação**.

---

### MenuBarItemsComponent
- `menu-bar-items.component.ts` → Lógica dos itens  
- `menu-bar-items.component.html` → Template dos itens  
- `menu-bar-items.component.css` → Estilos dos itens  

📌 Mostra os **links e opções** dentro da barra de navegação.

---

### MenuBarLogoComponent
- `menu-bar-logo.component.ts` → Lógica do logo  
- `menu-bar-logo.component.html` → Template do logo  
- `menu-bar-logo.component.css` → Estilos do logo  

📌 Exibe o **logo da aplicação** na barra de navegação.

---

## 📄 Páginas

### HomeComponent
- `home.component.ts` → Lógica da página inicial  
- `home.component.html` → Template da home  
- `home.component.css` → Estilos da home  

📌 Representa a **landing page** principal da aplicação.

---

## 🚀 Como Rodar

1. Instale as dependências:
   ```bash
   cd store
   npm install

# Iniciar o Servidor
ng serve

# Acessar o Navegador
👉 http://localhost:4200/

