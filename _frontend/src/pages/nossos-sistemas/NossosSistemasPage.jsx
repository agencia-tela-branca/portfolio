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
            title: "Sistema PDV (Ponto de Venda)",
            description: "Solução robusta para gestão de lojas e prestadores de serviços, unificando vendas, estoque e agenda.",
            icon: <Target size={32} className="text-white" />,
            gradient: "from-accent-blue to-accent-cyan",
            features: ["Vendas Ultra Ágeis", "Gestão de Comandas", "Controle de Estoque Real"]
        },
        {
            title: "Plataformas SaaS",
            description: "Desenvolvimento de plataformas completas para ideias de negócio baseadas em assinatura.",
            icon: <Rocket size={32} className="text-white" />,
            gradient: "from-accent-purple to-accent-blue",
            features: ["Pagamentos Recorrentes", "Painel Administrativo", "Escalabilidade na Nuvem"]
        },
        {
            title: "Sistema de Gestão (ERP)",
            description: "Solução integrada para unificar financeiro, estoque, vendas e outras áreas da empresa.",
            icon: <TrendingUp size={32} className="text-white" />,
            gradient: "from-accent-cyan to-accent-purple",
            features: ["Gestão Financeira", "Relatórios Completos", "Integração Bancária"]
        },
        {
            title: "E-commerce Integrado",
            description: "Criação de lojas virtuais de alta performance, integradas com sistemas de estoque e PDV.",
            icon: <Globe size={32} className="text-white" />,
            gradient: "from-accent-blue to-accent-purple",
            features: ["Catálogo Online", "Meios de Pagamento", "Sincronização de Pedidos"]
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
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {systems.map((system, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="group relative bg-transparent rounded-3xl p-8 border border-brand-gray transition-all duration-300"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${system.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {system.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-brand-charcoal group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-all">
                                    {system.title}
                                </h3>

                                <p className="text-brand-darkgray mb-6 leading-relaxed">
                                    {system.description}
                                </p>

                                <ul className="space-y-2">
                                    {system.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-brand-darkgray">
                                            <CheckCircle2 size={16} className="text-accent-blue flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* PDV Showcase - Destaque Premium */}
            <section className="py-20 px-6 bg-gradient-to-br from-brand-offwhite to-white border-y border-brand-gray">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <div className="inline-block mb-4 px-4 py-1 bg-accent-blue/10 rounded-full border border-accent-blue/20">
                                <span className="text-accent-blue font-bold text-sm tracking-widest uppercase">Destaque Tech</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-charcoal mb-6 leading-tight">
                                PDV Tela Branca <span className="text-accent-blue">v1.0</span>
                            </h2>
                            <p className="text-xl text-brand-darkgray mb-8 leading-relaxed">
                                Muito mais que um simples caixa. Uma ferramenta de gestão completa desenhada para
                                <strong className="text-brand-charcoal"> lojas e prestadores de serviços </strong>
                                que buscam velocidade e controle absoluto.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "Gestão de Comandas", desc: "Controle por mesa ou cliente." },
                                    { title: "Agenda Inteligente", desc: "Horários e serviços em tempo real." },
                                    { title: "Vendas Ágeis", desc: "Frente de caixa intuitiva." },
                                    { title: "Estoque Blindado", desc: "Controle rigoroso de entradas e saídas." }
                                ].map((item, id) => (
                                    <div key={id} className="flex gap-3">
                                        <CheckCircle2 className="text-accent-blue flex-shrink-0" size={20} />
                                        <div>
                                            <h4 className="font-bold text-brand-charcoal">{item.title}</h4>
                                            <p className="text-sm text-brand-darkgray">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative z-10 bg-white p-2 rounded-[2.5rem] shadow-2xl border border-brand-gray">
                                <div className="bg-brand-charcoal rounded-[2rem] p-6 text-white min-h-[350px] flex flex-col justify-between overflow-hidden relative">
                                    <div className="flex justify-between items-start relative z-10">
                                        <div>
                                            <p className="text-accent-cyan text-xs font-bold uppercase tracking-widest mb-1">Status do Sistema</p>
                                            <h4 className="text-2xl font-bold">Online & Operacional</h4>
                                        </div>
                                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                                            <Zap size={20} className="text-accent-cyan" />
                                        </div>
                                    </div>

                                    <div className="space-y-4 relative z-10">
                                        <div className="h-2 w-3/4 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "95%" }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                                className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-400">Desempenho da API: <span className="text-white font-mono">240ms</span></p>
                                    </div>

                                    {/* Decorative circles in card */}
                                    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent-blue/20 rounded-full blur-3xl" />
                                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl" />
                                </div>
                            </div>

                            {/* External decorative blur */}
                            <div className="absolute -top-10 -right-10 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </div>
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
