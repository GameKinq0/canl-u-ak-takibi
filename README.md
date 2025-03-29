# Canlı Uçak Takibi

Bu proje, canlı uçak takibi sağlayan bir web sitesidir.

## Başlangıç

### Backend

1. `backend` klasörüne gidin:
    ```sh
    cd backend
    ```

2. Gerekli paketleri yükleyin:
    ```sh
    npm install
    ```

3. Sunucuyu başlatın:
    ```sh
    npm start
    ```

### Frontend

1. `frontend` klasörüne gidin:
    ```sh
    cd frontend
    ```

2. Gerekli paketleri yükleyin:
    ```sh
    npm install
    ```

3. Uygulamayı başlatın:
    ```sh
    npm start
    ```

### Proje Yapısı

```
canli-ucak-takibi/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── components/
│   ├── package.json
│   └── .env
└── README.md
```

## API

Canlı uçak verilerini almak için bir uçuş takip API'si kullanmanız gerekecek. Önerilen bazı API'ler:

- [FlightAware](https://flightaware.com/commercial/flightxml/)
- [OpenSky Network](https://opensky-network.org/apidoc/index.html)
- [ADS-B Exchange](https://www.adsbexchange.com/data/)
