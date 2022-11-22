import Image from 'next/image';

const baseUrl = 'https://api.exchangerate.host/latest';
const currencies = [
    {
        name: 'EGP',
        icon: '/EGP.png',
        value: 0,
        base: 'USD',
        symbols: 'EGP'
    },
    {
        name: 'Gold',
        icon: '/Gold.png',
        value: 0,
        base: 'BTC',
        symbols: 'CAD'


    },
    {
        name: 'BTC',
        icon: '/BTC.png',
        value: 0,
        base: 'BTC',
        symbols: 'USD'
    }
]

const getData = async (url) => {
    const response = await fetch(url, { next: { revalidate: 1 } });
    var data = await response.json();
    return data.rates
}

const loadValues = () => new Promise(resolve => {
    currencies.forEach(async (currency, index) => {
        const url = new URL(baseUrl);
        url.searchParams.append("base", currency.base);
        url.searchParams.append("symbols", currency.symbols);
        await getData(url).then((response) => (currency.value = response[currency.symbols]));
        if (index === currencies.length - 1) resolve();
    });
});


async function HeroPreviewTop3() {
    await loadValues();

    return (
        <section className='px-3 py-4'>
            <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:justify-evenly items-center text-center sm:space-x-3 sm:my-4 mx-auto'>
                {
                    currencies.map(({ icon, name, value, symbols }, index) => (
                        <div key={index}>
                            <Image src={icon} width={180} height={180} priority={true} className='hidden sm:block' />
                            <Image src={icon} width={140} height={140} priority={true} className='block sm:hidden' />
                            <h1 className='text-4xl text-white'>{name}</h1>

                                <p className='sm:text-3xl text-xl text-white'>{Math.round((value + Number.EPSILON) * 100) / 100} <span className='text-amber-200 text-xl'>{symbols}</span></p>

                        </div>

                    ))
                }
            </div>
        </section>
    )
}

export default HeroPreviewTop3