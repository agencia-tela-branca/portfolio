import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
    Globe, TrendingUp, Zap, ArrowRight,
    CheckCircle2, Sparkles, Rocket, Target,
    Mail, Linkedin, Instagram, Twitter,
    Menu, X, Shield
} from "lucide-react";
import { useEffect } from "react";

const HomePage = () => {
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
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
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

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    // Dados dos serviços
    const services = [
        {
            icon: <Globe className="text-white" size={32} />,
            title: "Sites de Alta Conversão",
            description: "Desenvolvimento de sites modernos, responsivos e otimizados para converter visitantes em clientes. Design estratégico focado em resultados. Sistemas de PDV personalizados e eficientes. Aplicativos responsivos e modernos, entregamos ferramentas robustas que integram design estratégico e máxima performance para converter tráfego em receita real.",
            gradient: "from-accent-blue to-accent-cyan",
            features: ["Sistemas PDV Modernos", "SEO Otimizado", "Apps Customizados", "Design Orientado a Dados",]
        },
        {
            icon: <TrendingUp className="text-white" size={32} />,
            title: "Presença Digital Estratégica",
            description: "Potencialize a transformação digital do seu negócio. Oferecemos uma sessão de diagnóstico para identificar como as novas tecnologias podem reduzir seus custos operacionais e escalar sua produtividade, também uma análise personalizada para identificar gargalos, otimizar processos e traçar metas de crescimento reais.",
            gradient: "from-accent-purple to-accent-blue",
            features: ["Auditoria de Stack", "Gestão de Redes", "Análise de Dados", "Escalabilidade"]
        },
        {
            icon: <Zap className="text-white" size={32} />,
            title: "Automação Inteligente",
            description: "Transformamos processos manuais em fluxos digitais automatizados. Ganhe tempo, reduza erros e escale seu negócio com tecnologia. Mantenha sua tecnologia sempre disponível e eficiente com o suporte de quem entende do seu projeto. Oferecemos acompanhamento contínuo para que sua tecnologia não apenas funcione, mas evolua junto com as demandas dos seus clientes.",
            gradient: "from-accent-cyan to-accent-purple",
            features: ["Atendimento Humanizado", "Evolução de Recursos", "Otimização com IA", "Eficiência Operacional"]
        }
    ];

    // Diferenciais
    const differentials = [
        {
            icon: <Target size={24} />,
            title: "Foco em Resultados",
            description: "Cada projeto é pensado para gerar impacto real no seu negócio"
        },
        {
            icon: <Sparkles size={24} />,
            title: "Design Moderno",
            description: "Interfaces que impressionam e convertem, sempre atualizadas com as últimas tendências"
        },
        {
            icon: <Rocket size={24} />,
            title: "Entrega Ágil",
            description: "Processos otimizados para lançar sua solução rapidamente no mercado"
        }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Navbar Minimalista */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm' : 'bg-transparent'}`}>
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
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="md:hidden flex items-center"
                    >
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-brand-charcoal hover:text-accent-blue transition-colors focus:outline-none bg-transparent border-none outline-none ring-0 appearance-none"
                            aria-label="Menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden md:flex items-center gap-8"
                    >
                        <a href="#servicos" className="text-brand-darkgray hover:text-accent-blue transition-colors font-medium">Serviços</a>
                        <a href="#diferenciais" className="text-brand-darkgray hover:text-accent-blue transition-colors font-medium">Diferenciais</a>
                        <Link to="/quem-somos" className="text-brand-darkgray hover:text-accent-blue transition-colors font-medium">Quem somos</Link>
                        <motion.div whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                            <Button
                                variant="contained"
                                href="#contato"
                                className="!bg-gradient-to-r !from-accent-blue !to-accent-purple hover:!from-accent-blueHover hover:!to-accent-purpleHover !text-white !font-semibold !px-6 !py-2 !rounded-full !shadow-lg !normal-case"
                            >
                                Fale Conosco
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-brand-gray overflow-hidden"
                        >
                            <div className="flex flex-col p-6 gap-6 items-center text-center">
                                <a
                                    href="#servicos"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-brand-charcoal hover:text-accent-blue transition-colors"
                                >
                                    Serviços
                                </a>
                                <a
                                    href="#diferenciais"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-brand-charcoal hover:text-accent-blue transition-colors"
                                >
                                    Diferenciais
                                </a>
                                <Link
                                    to="/quem-somos"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-brand-charcoal hover:text-accent-blue transition-colors"
                                >
                                    Quem somos
                                </Link>
                                <Button
                                    variant="contained"
                                    href="#contato"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="!bg-gradient-to-r !from-accent-blue !to-accent-purple !text-white !font-bold !py-3 !rounded-xl !normal-case !shadow-lg"
                                >
                                    Fale Conosco
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32 md:py-40 mt-16 bg-gradient-to-br from-brand-offwhite via-white to-brand-lightgray relative overflow-hidden">
                {/* Background decorativo */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            rotate: [90, 0, 90]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent-cyan/5 to-accent-purple/5 rounded-full blur-3xl"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-5xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-full border border-accent-blue/20"
                    >
                        <span className="text-accent-blue font-semibold text-sm md:text-base">✨ Transformando ideias em realidade digital</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-brand-charcoal">
                        Do Vazio da{" "}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan">
                                Tela Branca
                            </span>
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </span>
                        <br />
                        ao Impacto Digital
                    </h1>

                    <p className="text-xl md:text-2xl text-brand-darkgray mb-10 max-w-3xl mx-auto leading-relaxed">
                        Criamos <strong className="text-accent-blue">sites de alta conversão</strong>,
                        potencializamos sua <strong className="text-accent-purple">presença digital</strong> e
                        automatizamos <strong className="text-accent-cyan">processos manuais</strong> para escalar seu negócio.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.div whileHover={{ y: -5, transition: { duration: 0.3 } }} className="w-full sm:w-auto">
                            <Button
                                variant="contained"
                                size="large"
                                href="#servicos"
                                endIcon={<ArrowRight />}
                                className="!bg-gradient-to-r !from-accent-blue !to-accent-purple hover:!from-accent-blueHover hover:!to-accent-purpleHover !text-white !font-bold !text-lg !px-10 !py-4 !rounded-full !shadow-2xl hover:!shadow-accent-blue/50 !transition-all !normal-case w-full sm:w-auto"
                            >
                                Conheça Nossos Serviços
                            </Button>
                        </motion.div>


                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-8 text-sm text-brand-darkgray flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-accent-blue" />
                            <span>Projetos Tecnológicos Personalizados</span>
                        </div>
                        <span className="hidden md:inline text-brand-gray items-center">•</span>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-accent-purple" />
                            <span>Consultoria Tecnológica Gratuita</span>
                        </div>
                        <span className="hidden md:inline text-brand-gray items-center">•</span>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-accent-cyan" />
                            <span>Suporte Técnico Especializado</span>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Serviços Section */}
            <section id="servicos" className="py-20 md:py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-extrabold mb-4 text-brand-charcoal"
                        >
                            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Serviços</span>
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-brand-darkgray max-w-2xl mx-auto"
                        >
                            Soluções digitais completas para transformar seu negócio
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="group relative bg-white rounded-3xl p-8 border border-brand-gray hover:border-transparent hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Gradient border on hover */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 transition-opacity -z-10 blur-xl`} />

                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-brand-charcoal group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-all">
                                    {service.title}
                                </h3>

                                <p className="text-brand-darkgray mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
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

            {/* Diferencial Section */}
            <section id="diferenciais" className="py-20 md:py-32 px-6 bg-gradient-to-br from-brand-lightgray via-brand-offwhite to-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-brand-charcoal">
                            Por Que Escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Tela Branca</span>?
                        </h2>
                        <p className="text-xl text-brand-darkgray max-w-2xl mx-auto">
                            Transformamos processos manuais em soluções digitais de alto impacto
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {differentials.map((diff, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white">
                                    {diff.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-brand-charcoal">{diff.title}</h3>
                                <p className="text-brand-darkgray">{diff.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-4xl p-6 md:p-12 text-center border border-white/10 shadow-glass relative overflow-hidden"
                        style={{
                            background: 'rgba(255, 255, 255, 0.03) !important',
                            backdropFilter: 'blur(16px) !important',
                            WebkitBackdropFilter: 'blur(16px) !important'
                        }}
                    >
                        {/* Camada de brilho sutil */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        <div className="absolute inset-0 -z-10 bg-white/5" />

                        <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-brand-charcoal">
                            Pronto para Transformar Seu Negócio?
                        </h3>
                        <p className="text-xl mb-8 text-brand-darkgray font-medium">
                            Vamos conversar sobre como podemos ajudar você a alcançar seus objetivos digitais
                        </p>
                        <motion.div whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                            <Button
                                variant="contained"
                                size="large"
                                href="#contato"
                                className="!bg-gradient-to-r !from-accent-blue !to-accent-purple hover:!scale-105 !text-white !font-bold !text-sm sm:!text-base md:!text-lg !px-4 sm:!px-6 md:!px-10 !py-4 !rounded-full !shadow-xl !transition-all !normal-case"
                            >
                                Agendar Consultoria Tecnológica Gratuita
                            </Button>
                        </motion.div>
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

export default HomePage;
