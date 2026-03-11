# React TODO App
**Uma aplicação Front-end moderna, minimalista e acessível para gerenciamento de tarefas diárias, otimizada com as ferramentas mais recentes do ecossistema React.**

## 📖 Sobre o Projeto

O **React Todo App** é uma Single Page Application (SPA) desenvolvida para oferecer uma experiência de usuário fluida e direta na criação e organização de listas de tarefas. 

O grande diferencial técnico deste projeto é a adoção de tecnologias de vanguarda: a aplicação roda na novíssima versão do **React (v19)** combinada com o **Vite (v7)**, e já implementa o **React Compiler** (`babel-plugin-react-compiler`). Isso significa que a aplicação possui otimização e memoização de renderização geradas automaticamente sob o capô, garantindo máxima performance sem a necessidade de poluir o código com hooks de otimização manuais (como `useMemo` ou `useCallback`).

## 🛠️ Tecnologias e Ferramentas

O projeto foi construído com uma stack moderna focada em performance, acessibilidade e experiência de desenvolvimento:

* **Core:** ReactJS v19 (Hooks, Functional Components)
* **Build Tool:** Vite v7 (Para um HMR instantâneo e builds extremamente rápidos)
* **Otimização:** Babel Plugin React Compiler
* **Estilização:** CSS Tradicional (Modularizado por componentes e variáveis CSS no escopo global)
* **Ícones:** React Icons (Material Design Icons)
* **Qualidade de Código:** ESLint (Padrão Airbnb), Prettier e PropTypes rigoroso.

## ✨ Funcionalidades em Destaque

### 1. Gestão Ágil de Tarefas
Interface limpa e intuitiva para entrada de dados. O estado da aplicação é gerenciado no componente pai (`App.jsx`) utilizando o princípio da imutabilidade do React para adicionar, alternar o status (concluído/pendente) e remover tarefas instantaneamente.

### 2. Foco em Acessibilidade (A11y)
A aplicação foi construída pensando em todos os usuários. Elementos interativos não nativos (como o texto da tarefa) possuem marcação semântica (`role='button'`, `tabIndex={0}`) e suporte completo a navegação por teclado:
* **Enter / Espaço:** Alterna o status da tarefa.
* **Escape:** Limpa o campo de nova tarefa rapidamente.

### 3. Responsividade e Temas Automáticos
Layout adaptativo focado na usabilidade em qualquer dispositivo, utilizando `flexbox` e limitação de largura (`max-width: 48rem`) para não quebrar a ergonomia da leitura. Além disso, a aplicação detecta automaticamente a preferência de cor do sistema operacional do usuário (`prefers-color-scheme`), adaptando as cores para modos claro ou escuro.

## 🧠 Destaques da Arquitetura

O código foi organizado seguindo princípios de **Clean Code** e separação de responsabilidades:

* **Modularização e Componentização:** A lógica de negócios e o estado residem no topo (`App.jsx`), enquanto a interface é dividida em componentes de apresentação puros (`NewTodo` e `TodoList`). Cada componente possui seu próprio diretório contendo seu `index.js` e seu `style.css`, facilitando a manutenção isolada.
* **Validação de Tipos Rigorosa:** Para garantir a integridade da aplicação e prevenir bugs silenciosos, o projeto faz uso extensivo de `PropTypes`. Arrays de objetos complexos (como a lista de `todos`) são validados propriedade por propriedade (`id`, `title`, `checked`), garantindo que a renderização sempre receba os dados no formato esperado.
* **Variáveis de CSS Centralizadas:** Toda a base visual (cores, reset, tipografia base) está definida em variáveis e tags baseadas no pseudo-seletor `:root` dentro de `global.css`, facilitando a manutenção e padronização.

## 🚀 Como executar o projeto localmente

Para clonar e executar esta aplicação, você precisará do [Git](https://git-scm.com) e do [Node.js](https://nodejs.org/en/) instalados.

No seu terminal, digite os seguintes comandos:

### 1. Clone o repositório
```bash
git clone [https://github.com/seu-usuario/react-todo.git](https://github.com/seu-usuario/react-todo.git)
```
### 2. Acesse a pasta do projeto
```bash
cd react-todo
```
### 3. Instale as dependências
```bash
npm install
```
### 4. Execute a aplicação em modo de desenvolvimento
```bash
npm run dev
```
**A aplicação será iniciada e o terminal mostrará o endereço local (geralmente http://localhost:5173). Basta abrir esse link no navegador.**

## Build para Produção
```bash
npm run build
```
** Lembre-se de apenas trocar o link "https://github.com/seu-usuario/react-todo.git" pela URL real do seu repositório quando for subir o projeto.**


