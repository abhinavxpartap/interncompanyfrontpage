import React, {FC} from 'react';
import {Img} from "../utils/Img";

interface BlogBodyInterface {
    content: any[];
}

interface BlockItemInterface {
    textColor: any;
    backgroundColor: any;
    textAlignment: any;
    children: any;
}

interface BlockItemHeadingInterface {
    textColor: any;
    backgroundColor: any;
    textAlignment: any;
    children: any;
    level: any;
}

const Heading: FC<BlockItemHeadingInterface> = (props) => {
    const {textColor, backgroundColor, textAlignment, children, level} = props;
    const HeadingTag: any = `h${level}`;
    const getClass = (level: any) => {
        const defaultClasses = 'font-medium text-[#1D1E25] my-[20px]';
        switch (level) {
            case '1':
                return `${defaultClasses} xl:text-[35px] md:text-[30px] sm:text-[22px] text-[16px] xl:leading-[52px] md:leading-[45px] leading-[24px] tracking-[1.42px] `;
            case '2':
                return `${defaultClasses} xl:text-[30px] md:text-[25px] sm:text-[20px] text-[16px] xl:leading-[44px] md:leading-[40px] leading-[24px] tracking-[1.42px] `;
            case '3':
                return `${defaultClasses} xl:text-[24px] md:text-[22px] sm:text-[18px] text-[16px] xl:leading-[38px] md:leading-[35px] leading-[24px] tracking-[1.42px] `;
            default:
                return defaultClasses;
        }
    }
    const className = getClass(level);
    return (
        <HeadingTag
            style={{color: textColor, backgroundColor, textAlign: textAlignment}}
            className={className}
        >
            {children}
        </HeadingTag>
    );
};

const Paragraph: FC<BlockItemInterface> = ({textColor, backgroundColor, textAlignment, children}) => {
    const linkItem = children?.find((item: any) => item.type === 'link');
    if (linkItem) {
        return (<>
                {
                    children.map((item: any, index: number) => {
                        switch (item.type) {
                            case 'text':
                                return (
                                    <p
                                        key={index}
                                        style={{color: textColor, backgroundColor, textAlign: textAlignment}}
                                        className="inline font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] my-[10px]"
                                    >
                                        {item.text}
                                    </p>
                                );
                            case 'link':
                                return (
                                    <a
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        className="inline underline underline-offset-[4px] decoration-[1.5px] decoration-[#44B480] xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] my-[10px] text-[#44B480]" rel="noreferrer"
                                    >
                                        {item.content.map((t: any, i: number) => <span key={i}>{t?.text}</span>)}
                                    </a>
                                );
                        }
                    })
                }
            </>
        );
    } else if (children.length > 1) {
        return (<>
                {
                    children.map((item: any, index: number) => {
                        return (
                            <p
                                key={index}
                                style={{
                                    color: textColor,
                                    backgroundColor,
                                    textAlign: textAlignment,
                                    fontWeight: item?.styles?.bold ? 600 : 400
                                }}
                                className="xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] my-[10px] inline"
                            >
                                {item?.text}
                            </p>
                        )
                    })
                }
            </>
        )
    } else {
        return (
            <p
                style={{color: textColor, backgroundColor, textAlign: textAlignment}}
                className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] my-[10px]"
            >
                {children[0]?.text}
            </p>
        )
    }
};

const BulletListItem: FC<BlockItemInterface> = ({textColor, backgroundColor, textAlignment, children}) => (
    <div
        style={{color: textColor, backgroundColor, textAlign: textAlignment}}
        className="w-full flex items-center gap-[16px] pb-[12px]"
    >
        <Img src="/images/check.svg" alt="Check"
             className="w-[13px] h-[13px]"/>
        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570]">
            {children}
        </p>
    </div>
);
const NumberedListItem: FC<BlockItemInterface> = ({textColor, backgroundColor, textAlignment, children}) => (
    <div
        style={{color: textColor, backgroundColor, textAlign: textAlignment}}
        className="w-full flex items-center gap-[16px] pb-[12px]"
    >
        <div>

        </div>
        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570]">
            {children}
        </p>
    </div>
);

export const BlogBody: FC<BlogBodyInterface> = (props) => {
    const {content} = props;
    return (
        <>
            {
                content?.map((item, index) => {
                    switch (item.type) {
                        case 'heading':
                            return (
                                <Heading
                                    key={item.id}
                                    textColor={item.props.textColor}
                                    backgroundColor={item.props.backgroundColor}
                                    textAlignment={item.props.textAlignment}
                                    level={item.props.level}
                                >
                                    {item.content[0]?.text}
                                </Heading>
                            );
                        case 'paragraph':
                            return (
                                <Paragraph
                                    key={item.id}
                                    textColor={item.props.textColor}
                                    backgroundColor={item.props.backgroundColor}
                                    textAlignment={item.props.textAlignment}
                                >
                                    {item.content}
                                </Paragraph>
                            );
                        case 'bulletListItem':
                            return (
                                <BulletListItem
                                    key={item.id}
                                    textColor={item.props.textColor}
                                    backgroundColor={item.props.backgroundColor}
                                    textAlignment={item.props.textAlignment}
                                >
                                    {item.content[0]?.text}
                                </BulletListItem>
                            );
                        case 'numberedListItem':
                            return (
                                <BulletListItem
                                    key={item.id}
                                    textColor={item.props.textColor}
                                    backgroundColor={item.props.backgroundColor}
                                    textAlignment={item.props.textAlignment}
                                >
                                    {item.content[0]?.text}
                                </BulletListItem>
                            );
                        case 'text':
                            return item.text;
                        default:
                            return null;
                    }
                })
            }
        </>
    );
}