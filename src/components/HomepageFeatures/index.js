import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Multiple Languages Supported',
        Svg: require('@site/static/img/logo.svg').default,
        description: (
            <>
                Compiling System Support multiple languages, including Yaklang, JavaScript(ES), Java, PHP and more.
                <br/>
                Standard eBNF g4 grammar file is supported.
            </>
        ),
    },
    {
        title: 'Advanced Analysis Techniques',
        Svg: require('@site/static/img/logo.svg').default,
        description: (
            <>
                In the SSA formal, we support a variety of advanced analysis techniques:
                <ul style={{textAlign: "left"}}>
                    <li>Context Sensitive Cross-Function Analysis</li>
                    <li>Data-Flow Analysis</li>
                    <li>Control-Flow Analysis</li>
                    <li>Use-Def Chain: Bottom-Up and Top-Down Analysis</li>
                    <li>Call Stack Context Analysis and more.</li>
                </ul>
            </>
        ),
    },
    {
        title: 'IR-Database and Analysis Rule',
        Svg: require('@site/static/img/logo.svg').default,
        description: (
            <>
                SSA formal provides a powerful IR-Database and Visualization tool, <br/>
                which can help you to understand the
                code structure and analyze the code quality.
                <br/>
                Even you can use the Rule System (SyntaxFlow: TBD) to define your own code analysis rules.
            </>
        )
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
