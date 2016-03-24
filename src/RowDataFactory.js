import RefData from './RefData';

export default class RowDataFactory {

  createRowData () {
    var rowData = [];

    for (var i = 0; i < 1000; i++) {
      var countryData = RefData.COUNTRIES[i % RefData.COUNTRIES.length];
      rowData.push({
        name: RefData.FIRST_NAMES[i % RefData.FIRST_NAMES.length] + ' ' + RefData.LAST_NAMES[i % RefData.LAST_NAMES.length],
        skills: {
          android: Math.random() < 0.4,
          html5: Math.random() < 0.4,
          mac: Math.random() < 0.4,
          windows: Math.random() < 0.4,
          css: Math.random() < 0.4
        },
        address: RefData.ADDRESSES[i % RefData.ADDRESSES.length],
        years: Math.round(Math.random() * 100),
        proficiency: Math.round(Math.random() * 100),
        country: countryData.country,
        continent: countryData.continent,
        language: countryData.language,
        mobile: this.createRandomPhoneNumber(),
        landline: this.createRandomPhoneNumber()
      });
    }

    return [
      {
        vessel: 'CMA CGM Sambhar',
        sta: new Date(),
        eta: new Date(),
        deviation: 5,
        distance: 90,
        capacity: 4.043,
        state: 'Entering',
        lastPort: 'New York'
      },
      {
        vessel: 'SCI Nhava Sheva',
        sta: new Date(),
        eta: new Date(),
        deviation: 8,
        distance: 112,
        capacity: 5.047,
        state: 'At Sea',
        lastPort: 'San Francisco'
      }
    ];
  }

  createRandomPhoneNumber () {
    var result = '+';
    for (var i = 0; i < 12; i++) {
      result += Math.round(Math.random() * 10);
      if (i === 2 || i === 5 || i === 8) {
        result += ' ';
      }
    }
    return result;
  }

}