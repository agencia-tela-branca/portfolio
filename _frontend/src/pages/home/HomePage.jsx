import { motion } from "framer-motion";
import { Button } from "@mui/material";
import {
    Globe, TrendingUp, Zap, ArrowRight,
    CheckCircle2, Sparkles, Rocket, Target,
    Mail, Linkedin, Instagram, Twitter
} from "lucide-react";

const HomePage = () => {
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
            description: "Desenvolvemos sites modernos, responsivos e otimizados para converter visitantes em clientes. Design estratégico focado em resultados.",
            gradient: "from-accent-blue to-accent-cyan",
            features: ["Design Responsivo", "SEO Otimizado", "Performance Máxima"]
        },
        {
            icon: <TrendingUp className="text-white" size={32} />,
            title: "Presença Digital Estratégica",
            description: "Potencialize sua marca online com estratégias orgânicas e pagas que geram visibilidade, engajamento e crescimento sustentável.",
            gradient: "from-accent-purple to-accent-blue",
            features: ["Marketing Digital", "Gestão de Redes", "Análise de Dados"]
        },
        {
            icon: <Zap className="text-white" size={32} />,
            title: "Automação Inteligente",
            description: "Transformamos processos manuais em fluxos digitais automatizados. Ganhe tempo, reduza erros e escale seu negócio com tecnologia.",
            gradient: "from-accent-cyan to-accent-purple",
            features: ["Workflows Automatizados", "Integrações", "Eficiência Operacional"]
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
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-brand-gray">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">TB</span>
                        </div>
                        <span className="text-xl font-bold text-brand-charcoal">Tela Branca</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden md:flex items-center gap-8"
                    >
                        <a href="#servicos" className="text-brand-darkgray hover:text-accent-blue transition-colors font-medium">Serviços</a>
                        <a href="#diferenciais" className="text-brand-darkgray hover:text-accent-blue transition-colors font-medium">Diferenciais</a>
                        <Button
                            variant="contained"
                            href="#contato"
                            className="!bg-gradient-to-r !from-accent-blue !to-accent-purple hover:!from-accent-blueHover hover:!to-accent-purpleHover !text-white !font-semibold !px-6 !py-2 !rounded-full !shadow-lg !normal-case"
                        >
                            Fale Conosco
                        </Button>
                    </motion.div>
                </div>
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
                        <Button
                            variant="contained"
                            size="large"
                            href="#servicos"
                            endIcon={<ArrowRight />}
                            className="!bg-gradient-to-r !from-accent-blue !to-accent-purple hover:!from-accent-blueHover hover:!to-accent-purpleHover !text-white !font-bold !text-lg !px-10 !py-4 !rounded-full !shadow-2xl hover:!shadow-accent-blue/50 !transition-all !normal-case w-full sm:w-auto"
                        >
                            Conheça Nossos Serviços
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            href="#contato"
                            className="!border-2 !border-brand-darkgray !text-brand-charcoal hover:!bg-brand-lightgray !font-semibold !text-lg !px-10 !py-4 !rounded-full !normal-case w-full sm:w-auto"
                        >
                            Fale com a Gente
                        </Button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-8 text-sm text-brand-darkgray flex items-center justify-center gap-2 flex-wrap"
                    >
                        <CheckCircle2 size={16} className="text-accent-blue" />
                        <span>Consultoria gratuita</span>
                        <span className="text-brand-gray">•</span>
                        <CheckCircle2 size={16} className="text-accent-purple" />
                        <span>Projetos personalizados</span>
                        <span className="text-brand-gray">•</span>
                        <CheckCircle2 size={16} className="text-accent-cyan" />
                        <span>Suporte dedicado</span>
                    </motion.p>
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
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl`} />

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
                        className="bg-gradient-to-r from-accent-blue to-accent-purple rounded-3xl p-12 text-center text-white shadow-2xl"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Pronto para Transformar Seu Negócio?
                        </h3>
                        <p className="text-xl mb-8 opacity-90">
                            Vamos conversar sobre como podemos ajudar você a alcançar seus objetivos digitais
                        </p>
                        <Button
                            variant="contained"
                            size="large"
                            href="#contato"
                            className="!bg-white !text-accent-blue hover:!bg-brand-offwhite !font-bold !text-lg !px-10 !py-4 !rounded-full !shadow-xl !normal-case"
                        >
                            Agendar Consultoria Gratuita
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contato" className="bg-brand-charcoal text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        {/* Coluna 1: Sobre */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">TB</span>
                                </div>
                                <span className="text-2xl font-bold">Tela Branca</span>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Agência digital especializada em transformar o vazio da tela branca em soluções de alto impacto para o seu negócio.
                            </p>
                            <div className="flex gap-4">
                                <a href="mailto:contato@telabranca.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-accent-blue hover:to-accent-purple flex items-center justify-center transition-all">
                                    <Mail size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-accent-blue hover:to-accent-purple flex items-center justify-center transition-all">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-accent-blue hover:to-accent-purple flex items-center justify-center transition-all">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-accent-blue hover:to-accent-purple flex items-center justify-center transition-all">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Coluna 2: Serviços */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">Nossos Serviços</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#servicos" className="hover:text-accent-blue transition-colors">Sites de Alta Conversão</a></li>
                                <li><a href="#servicos" className="hover:text-accent-blue transition-colors">Presença Digital</a></li>
                                <li><a href="#servicos" className="hover:text-accent-blue transition-colors">Automação de Processos</a></li>
                                <li><a href="#servicos" className="hover:text-accent-blue transition-colors">Consultoria Digital</a></li>
                            </ul>
                        </div>

                        {/* Coluna 3: Contato */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">Entre em Contato</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-2">
                                    <Mail size={20} className="text-accent-blue mt-1 flex-shrink-0" />
                                    <a href="mailto:contato@telabranca.com" className="hover:text-white transition-colors">
                                        contato@telabranca.com
                                    </a>
                                </li>
                                <li className="text-sm">
                                    Horário de atendimento:<br />
                                    Segunda a Sexta, 9h às 18h
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
