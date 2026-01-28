import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
    Users, Target, Sparkles, Heart,
    Mail, Linkedin, Instagram, ArrowRight,
    CheckCircle2, Globe, Zap, TrendingUp,
    Menu, X, Shield
} from "lucide-react";
import { useState, useEffect } from "react";

const QuemSomosPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    const values = [
        {
            icon: <Target className="text-white" size={32} />,
            title: "Nossa Missão",
            description: "Transformar a visão de nossos clientes em realidades digitais impactantes, removendo as barreiras técnicas e focando no que realmente importa: resultados.",
            gradient: "from-accent-blue to-accent-cyan"
        },
        {
            icon: <Sparkles className="text-white" size={32} />,
            title: "Nossa Visão",
            description: "Ser a referência em inovação digital, reconhecida pela excelência em design, performance e humanização tecnológica em cada projeto.",
            gradient: "from-accent-purple to-accent-blue"
        },
        {
            icon: <Heart className="text-white" size={32} />,
            title: "Nossos Valores",
            description: "Transparência total, compromisso com o sucesso do cliente, agilidade constante e a busca incessante pela perfeição nos detalhes.",
            gradient: "from-accent-cyan to-accent-purple"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Navbar Minimalista (Replicated from HomePage for consistency) */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                    >
                        <Link
                            to="/"
                            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            <div className="w-12 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">ATB</span>
                            </div>
                            <span className="text-xl font-bold text-brand-charcoal">Agência Tela Branca</span>
                        </Link>
                    </motion.div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-brand-charcoal hover:text-accent-blue transition-colors focus:outline-none bg-transparent border-none outline-none ring-0 appearance-none"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-brand-darkgray hover:text-accent-blue transition-colors font-medium">Início</Link>
                        <a href="/#servicos" className="text-brand-darkgray hover:text-accent-blue transition-colors font-medium">Serviços</a>
                        <a href="/#diferenciais" className="text-brand-darkgray hover:text-accent-blue transition-colors font-medium">Diferenciais</a>
                        <Link to="/quem-somos" className="text-accent-blue hover:text-accent-blueHover transition-colors font-medium">Quem somos</Link>
                        <motion.div whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                            <Button
                                variant="contained"
                                href="/#contato"
                                className="!bg-gradient-to-r !from-accent-blue !to-accent-purple hover:!from-accent-blueHover hover:!to-accent-purpleHover !text-white !font-semibold !px-6 !py-2 !rounded-full !shadow-lg !normal-case"
                            >
                                Fale Conosco
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="md:hidden bg-white border-t border-brand-gray overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6 items-center text-center">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-charcoal hover:text-accent-blue">Início</Link>
                            <a href="/#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-charcoal hover:text-accent-blue">Serviços</a>
                            <a href="/#diferenciais" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-charcoal hover:text-accent-blue">Diferenciais</a>
                            <Link to="/quem-somos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-accent-blue">Quem somos</Link>
                            <Button
                                variant="contained"
                                href="/#contato"
                                onClick={() => setIsMenuOpen(false)}
                                className="!bg-gradient-to-r !from-accent-blue !to-accent-purple !text-white !font-bold !py-3 !rounded-xl !normal-case !shadow-lg"
                            >
                                Fale Conosco
                            </Button>
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 bg-gradient-to-br from-brand-offwhite via-white to-brand-lightgray relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-brand-charcoal">
                            Conheça a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Agência Tela Branca</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-brand-darkgray leading-relaxed mb-8">
                            Nascemos da paixão por transformar o potencial ilimitado de uma tela em branco em soluções digitais que impulsionam negócios e encantam usuários.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-charcoal">Nossa História</h2>
                            <p className="text-lg text-brand-darkgray mb-6 leading-relaxed">
                                A Agência Tela Branca surgiu com o propósito de simplificar a jornada digital. Entendemos que muitas empresas se sentem perdidas diante da complexidade tecnológica.
                            </p>
                            <p className="text-lg text-brand-darkgray mb-6 leading-relaxed">
                                Nosso nome reflete nossa filosofia: todo projeto começa com uma tela em branco, livre de pré-conceitos e cheia de possibilidades. Trabalhamos lado a lado com nossos clientes para pintar um futuro digital de sucesso.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-8">
                                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full font-medium">
                                    <CheckCircle2 size={20} /> Experiência Comprovada
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium">
                                    <CheckCircle2 size={20} /> Foco Total no Cliente
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center p-8">
                                <Users size={120} className="text-accent-blue opacity-50" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-brand-gray">
                                <p className="text-4xl font-bold text-accent-blue mb-1">+100%</p>
                                <p className="text-sm text-brand-darkgray font-medium">Comprometimento com<br />seu resultado</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-20 md:py-32 px-6 bg-brand-lightgray/30">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-3xl p-8 shadow-sm border border-brand-gray hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-brand-charcoal">{item.title}</h3>
                                <p className="text-brand-darkgray leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Footer Replicated from HomePage */}
            <footer id="contato" className="bg-gray-900 text-white py-8 px-6 mt-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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

export default QuemSomosPage;
