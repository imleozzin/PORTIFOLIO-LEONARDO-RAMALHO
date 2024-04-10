

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/imleozzin/PORTIFOLIO-LEONARDO-RAMALHO/main/assets/data/profile.json?token=GHSAT0AAAAAACQXEEVV7J5GLITLL67OXVSCZQW2I6Q'
    const fetching = await fetch(url)
    return await fetching.json()
}