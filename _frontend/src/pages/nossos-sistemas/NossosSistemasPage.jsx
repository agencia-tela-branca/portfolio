import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
    Menu, X, Shield,
    CheckCircle2, Sparkles, Rocket, Target, Zap, Globe, TrendingUp,
    Mail, Linkedin, Instagram
} from "lucide-react";

const NossosSistemasPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Variantes de animação
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Dados placeholder baseados em "Diferenciais" e "Serviços" para preencher a página
    const systems = [
        {
            title: "Sistemas PDV",
            description: "Soluções completas para Ponto de Venda, integrando vendas, estoque e financeiro em uma única plataforma intuitiva.",
            icon: <Target size={32} className="text-white" />,
            features: ["Controle de Estoque Real-time", "Emissão de Notas Fiscais", "Relatórios Gerenciais"]
        },
        {
            title: "Gestão Empresarial (ERP)",
            description: "Centralize toda a operação da sua empresa. Do comercial ao financeiro, tenha o controle total na palma da mão.",
            icon: <TrendingUp size={32} className="text-white" />,
            features: ["Fluxo de Caixa", "Gestão de Clientes (CRM)", "Automação de Processos"]
        },
        {
            title: "E-commerce Integrado",
            description: "Sua loja física e virtual conectadas. Venda em múltiplos canais com estoque unificado.",
            icon: <Globe size={32} className="text-white" />,
            features: ["Sincronização de Estoque", "Painel Único", "Integração Logística"]
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Navbar Minimalista */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-brand-gray ${isScrolled ? 'bg-white/30 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                    >
                        <Link
                            to="/"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            <div className="w-12 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">ATB</span>
                            </div>
                            <span className="text-xl font-bold text-brand-charcoal">Agência Tela Branca</span>
                        </Link>
                    </motion.div>

                    {/* Menu Mobile Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-brand-charcoal hover:text-accent-blue transition-colors focus:outline-none"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden md:flex items-center gap-8"
                    >
                        <Link to="/" className="text-brand-darkgray hover:text-accent-blue transition-colors font-medium">Home</Link>
                        <a href="/#servicos" className="text-brand-darkgray hover:text-accent-blue transition-colors font-medium">Serviços</a>
                        <Link to="/nossos-sistemas" className="text-accent-blue font-bold transition-colors">Nossos Sistemas</Link>
                        <Link to="/quem-somos" className="text-brand-darkgray hover:text-accent-blue transition-colors font-medium">Quem somos</Link>
                        <Button
                            variant="contained"
                            className="!bg-accent-blue hover:!bg-accent-purple !text-white !font-bold !px-6 !py-2 !rounded-full !normal-case !transition-all"
                        >
                            Fale Conosco
                        </Button>
                    </motion.div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-brand-gray overflow-hidden"
                        >
                            <div className="flex flex-col p-6 gap-4">
                                <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-brand-darkgray hover:text-accent-blue font-medium text-lg">Home</Link>
                                <a href="/#servicos" onClick={() => setIsMenuOpen(false)} className="text-brand-darkgray hover:text-accent-blue font-medium text-lg">Serviços</a>
                                <Link to="/nossos-sistemas" onClick={() => setIsMenuOpen(false)} className="text-accent-blue font-bold text-lg">Nossos Sistemas</Link>
                                <Link to="/quem-somos" onClick={() => setIsMenuOpen(false)} className="text-brand-darkgray hover:text-accent-blue font-medium text-lg">Quem somos</Link>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    className="!bg-accent-blue hover:!bg-accent-purple !text-white !font-bold !py-3 !rounded-lg !normal-case"
                                >
                                    Fale Conosco
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-brand-lightgray via-brand-offwhite to-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-brand-charcoal mb-6 leading-tight">
                            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Sistemas</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Tecnologia de ponta para impulsionar o seu negócio. Conheça as soluções que desenvolvemos para otimizar processos e gerar resultados.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
            </section>

            {/* Systems Grid */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {systems.map((system, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-8 rounded-2xl border border-brand-gray hover:border-accent-blue/30 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-blue/20`}>
                                    {system.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-brand-charcoal mb-4 group-hover:text-accent-blue transition-colors">
                                    {system.title}
                                </h3>
                                <p className="text-gray-500 mb-6 leading-relaxed">
                                    {system.description}
                                </p>
                                <ul className="space-y-3">
                                    {system.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-600">
                                            <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contato" className="bg-gray-900 text-white py-8 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Coluna 1: Sobre */}
                        <div className="text-center md:text-left flex flex-col items-center">
                            <p className="text-gray-400 mb-4 leading-relaxed text-center">
                                Agência digital especializada em transformar<br />
                                o vazio da tela branca em soluções de<br />
                                alto impacto para o seu negócio.
                            </p>
                            <div className="flex gap-4 justify-center">
                                <a href="mailto:contato@telabranca.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-accent-blue hover:to-accent-purple flex items-center justify-center transition-all">
                                    <Mail size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-accent-blue hover:to-accent-purple flex items-center justify-center transition-all">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-accent-blue hover:to-accent-purple flex items-center justify-center transition-all">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Coluna 2: Links Úteis */}
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-4">SOBRE NÓS:</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    Horário de atendimento:<br />
                                    Segunda a Sexta, 9h às 18h
                                </li>
                                <li className="flex items-center gap-2 justify-center">
                                    <Shield size={16} className="text-gray-400" />
                                    <a href="#" className="hover:text-accent-blue transition-colors">Políticas de Privacidade</a>
                                </li>
                            </ul>
                        </div>

                        {/* Coluna 3: Contato */}
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-4">CONTATO:</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2 justify-center">
                                    <Mail size={20} className="text-accent-blue mt-1 flex-shrink-0" />
                                    <a href="mailto:contato@telabranca.com" className="hover:text-white transition-colors">
                                        contato@telabranca.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-2 justify-center">
                                    <Zap size={20} className="text-accent-blue flex-shrink-0" />
                                    <a href="#" className="hover:text-accent-blue transition-colors">
                                        Entre em contato com o suporte
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
                        <p>© {new Date().getFullYear()} Agência Tela Branca. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NossosSistemasPage;
