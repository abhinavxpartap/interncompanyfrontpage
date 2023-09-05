import React from 'react';

interface InputInterface {
    label?: string
    name?: string
    rows?: number
    type?: string
    value: string
    onChange: (e: any) => any
    error?: string
    placeholder?: string
    className?: string
    prefix?: any
    withGetStarted?: boolean
    withHeight?: boolean
}

export const Input: React.FC<InputInterface> = (
    {
        label,
        name,
        type,
        value,
        onChange,
        error,
        placeholder,
        className,
        prefix,
        withGetStarted,
        withHeight = true
    }
) => {
    return (
        <div className={`input-container ${withHeight ? 'h-[100%]' : ''}`}>
            {
                label && <label
                    htmlFor={name}
                    className="font-semibold text-[#101D2C] text-[14px] leading-[26px] mb-[5px] block"
                >
                    {label}
                </label>
            }
            <div className="relative">
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    // className={
                    //     `${prefix ? 'pr-[50px]' : ''} bg-[#FFFFFF] text-[16px] leading-[26px] px-[30px] py-[17px] w-full placeholder:text-[16px] placeholder:leading-[26px] placeholder:font-normal ${className}
                    //     ${withGetStarted ? 'bg-[#f8f8f8] border-[2px] text-[#72849a] placeholder:text-[#72849a] rounded-[10px]' : 'rounded-[31.5px] text-[#101D2C] placeholder:text-[#101D2C] border-[0.3px]'}
                    //     `}
                    // style={{
                    //     borderColor: !withGetStarted ? 'rgba(75, 90, 105, .62)' : '#f8f8f8'
                    // }}
                    className={
                        `${prefix ? 'pr-[50px]' : ''} bg-[#FFFFFF] text-[16px] leading-[26px] px-[30px] py-[17px] w-full placeholder:text-[8px] md:placeholder:text-[16px] placeholder:leading-[26px] placeholder:font-normal ${className}
                        ${withGetStarted ? 'bg-[#FFFFFF] border-[1px] text-[black] placeholder:text-[black] rounded-[10px]' : 'rounded-[31.5px] text-[#101D2C] placeholder:text-[#101D2C] border-[0.3px]'}
                        `}
                    style={{
                        borderColor: !withGetStarted ? 'rgba(75, 90, 105, .62)' : 'rgba(22, 27, 31, 0.33785);'
                    }}
                />
                {
                    prefix &&
                    <div className="absolute top-0 right-0 h-[100%] w-[30px] sm:w-[50px] flex items-center justify-center">
                        {prefix}
                    </div>
                }
            </div>
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export const TextArea: React.FC<InputInterface> = (
    {
        label,
        name,
        rows,
        value,
        onChange,
        error,
        placeholder,
        className,
        prefix
    }
) => {
    return (
        <div className="input-container h-[100%]">
            {
                label && <label
                    htmlFor={name}
                    className="font-semibold text-[#101D2C] text-[14px] leading-[26px] mb-[5px] block"
                >
                    {label}
                </label>
            }
            <textarea
                name={name}
                value={value}
                rows={rows || 5}
                onChange={onChange}
                placeholder={placeholder}
                className={`${prefix ? 'pr-[50px]' : ''} bg-[#FFFFFF] rounded-[31.5px] text-[#101D2C] text-[16px] leading-[26px] px-[30px] py-[17px] border-[0.3px] w-full placeholder:text-[16px] placeholder:text-[#101D2C] placeholder:leading-[26px] placeholder:font-normal ${className}`}
                style={{
                    borderColor: 'rgba(75, 90, 105, .62)'
                }}
            />
            {error && <div className="error">{error}</div>}
        </div>
    )
}


