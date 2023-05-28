

async function api() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    const parent_data = document.querySelector('.countrylist');
    for (const country of countries) {
      try {
        const content = document.createElement('div');
        content.classList.add('country_data');
        content.classList.add('card');
        content.style.display = 'inline-block';
  
        const country_name = document.createElement('p');
        country_name.classList.add('Name');
        country_name.innerText = country.name.common;
        content.append(country_name);
  
        const flag = document.createElement('img');
        flag.classList.add('fl');
        flag.setAttribute('src', country.flags.png);
        content.append(flag);
  
        const capit = document.createElement('p');
        capit.innerText = country.capital && country.capital[0] ? country.capital[0] : 'N/A';
        content.append(capit);
  
        const reg = document.createElement('p');
        reg.innerText = country.region;
        content.append(reg);
  
        parent_data.append(content);
      } 
      catch {
        console.error('An error occurred while processing the country data');
      }
    }
  }
  
  api();