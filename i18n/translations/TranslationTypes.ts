export interface TranslationTypes {
    logisticBlock: {
        internationalTransportation: {
            tab: string;
            content: {
                title: string;
                description: string;
                icon: string;
            }
        },
        containerService: {
            tab: string;
            content: {
                title: string;
                description: string;
                icon: string;
            }
        },
        behind: {
            tab: string;
            content: {
                title: string;
                description: string;
                icon: string;
            }
        },
        aboutCompany: {
            tab: string;
            content: {
                title: string;
                description: string;
                icon: string;
            }
        }
    },

    contactForm: {
        title: string;
        fields: {
            name: string;
            phone: string;
            email: string;
            service: string;
            message: string;
        };
        services: {
            default: string;
            international: string;
            container: string;
            other: string;
        };
        submitButton: string;
        successModal: {
            title: string;
            message: string;
            button: string;
        };
    };

    footer: {
        logoAlt: string;
        copyrightTextDate: string;
        copyrightTextCompany: string;
    };
}