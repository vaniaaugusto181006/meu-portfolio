# 🌟 Portfólio - Vania Lucia

> **Desenvolvedora Frontend** | Criando experiências digitais modernas e responsivas

[![Responsive](https://img.shields.io/badge/design-responsive-blue)](#)
[![Dark Mode](https://img.shields.io/badge/theme-dark%20%7C%20light-purple)](#)

[🌐 **Ver Portfólio Online**](#) | [📱 **Demo Mobile**](#) | [💻 **Demo Desktop**](#)

---

## 📋 **Sobre o Projeto**

Portfólio pessoal desenvolvido para demonstrar habilidades técnicas e projetos em desenvolvimento frontend. O projeto enfatiza **clean code**, **responsividade** e **experiência do usuário**.

### **🎯 Objetivos**
- Showcase de projetos e habilidades técnicas
- Demonstração de conhecimento em HTML5, CSS3/SASS e JavaScript
- Aplicação de boas práticas de desenvolvimento frontend
- Design system consistente e acessível

---

## � **Tecnologias & Ferramentas**

<div align="center">

| **Categoria** | **Tecnologias** |
|---------------|-----------------|
| **Markup** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) |
| **Styling** | ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) |
| **Scripting** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **Tools** | ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) ![VS Code](https://img.shields.io/badge/VS%20Code-0078d4.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) |

</div>

---

## ⚡ **Funcionalidades**

### **� Interface & UX**
- ✅ **Design System** - Variáveis SASS organizadas e reutilizáveis
- ✅ **Dark/Light Mode** - Toggle com persistência no localStorage
- ✅ **Layout Responsivo** - Mobile-first approach
- ✅ **Animações CSS** - Micro-interações e feedback visual
- ✅ **Navegação Suave** - Smooth scroll entre seções

### **📱 Responsividade Detalhada**
| **Breakpoint** | **Layout** | **Características** |
|----------------|------------|---------------------|
| **Mobile** (320px+) | Single column | Menu hamburger, cards empilhados |
| **Tablet** (768px+) | 2-column grid | Menu expandido, layout híbrido |
| **Desktop** (1024px+) | Multi-column | Layout completo, hover effects |

### **🛠 Funcionalidades Técnicas**
- ✅ **Código Semântico** - HTML5 estruturado e acessível
- ✅ **SASS Architecture** - BEM methodology e partial imports
- ✅ **JavaScript Vanilla** - Sem dependências externas
- ✅ **Performance** - Otimizado para Core Web Vitals
- ✅ **SEO Ready** - Meta tags e estrutura otimizada

---

## 📂 **Estrutura do Projeto**

```
meu-portifolio/
├── � assets/
│   └── 📁 images/
├── 📁 styles/
│   ├── 📄 main.scss
│   ├── 📄 _variables.scss
│   ├── 📄 _mixins.scss
│   ├── 📄 _base.scss
│   ├── 📄 _header.scss
│   ├── 📄 _hero.scss
│   ├── 📄 _about.scss
│   ├── 📄 _projects.scss
│   └── 📄 _contact.scss
├── 📄 index.html
├── 📄 script.js
└── 📄 README.md
```

---

## 🎯 **Destaques do Código**

### **SASS Architecture**
```scss
// Variáveis organizadas para manutenibilidade
$primary-color: #667eea;
$breakpoint-tablet: 768px;
$spacing-md: 1.5rem;

// Mixins reutilizáveis
@mixin respond-to($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}
```

### **JavaScript Funcional**
```javascript
// Theme toggle com persistência
const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('theme');

// Implementação clean e eficiente
```


## 👩‍💻 **Sobre a Desenvolvedora**

**Vania Lucia** - Desenvolvedora Frontend em transição de carreira

- 🔗 **GitHub**: [vaniaaugusto181006](https://github.com/vaniaaugusto181006)
- 💼 **LinkedIn**: [Vania Lucia](https://linkedin.com/in/seu-perfil)

---

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

Desenvolvido com ❤️ por [Vania Lucia](https://github.com/vaniaaugusto181006)


</div>
