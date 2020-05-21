---
title: API
permalink: /api
---

# Server side

JSON API created with `Postman`:

```json
{
	"info": {
		"_postman_id": "0fa916d3-2259-414e-b832-74bc1be2d4d0",
		"name": "sanlam-indie",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "0_auth-request-test",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1rUkNSak01T1RFeU9VTTNNekl3TVRRd01UaEVOVEJDUmpJME9UY3dPRGN3UTBJeFFUTkVRdyJ9.eyJpc3MiOiJodHRwczovL2luZmluaXR5YXJjLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZWMyY2ZhNzhiMjM5ZDBiZmU3MTMxNjgiLCJhdWQiOlsiaHR0cHM6Ly9zYW5sYW1pbmRpZS1kZW1vLWFwaSIsImh0dHBzOi8vaW5maW5pdHlhcmMuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTU4OTk4NDQyMCwiZXhwIjoxNTkwMDcwODIwLCJhenAiOiJjYVBTeDg0a0dGNGZSQ0x0VjNTU0todmduUVJGcmNPUCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.uLcOC2SNlcOCsXh91siKuglZgPInMucXaOR7djtDVPs9Pgkwhu-mZGZVYW1Qyv4xwz3AahA0DVvM7MKQufABcJLoNzkGZlQZTJ9vKvzzAcQrvuBe-upTVeO4qn1hgyxR3zhuMWjMSATsoNiWCalalSYiY6wWknjfkYDMsGAHL-EWlxCWzj3dp4XelXB5GckCG7ml8CD0NGhaTUxSC_zbnNgU6W5L5gtTF8R2KWpHNPffHf84mLIS6rHBRfzNLTcICcdzlpfso_fEad0U5NURK26LoKS5BRNJuVtbfAwCKV-ZLbk1U984Gd6ViYPZcwCdGWrauuKdMQo4gkBXzmqOTA",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/test",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"test"
					]
				}
			},
			"response": [
				{
					"name": "localhost:3000/api/products",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3000/api/products",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"products"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "9806"
						},
						{
							"key": "ETag",
							"value": "W/\"264e-cuWkGKwI5qdKOpI/5uMYqjbljfA\""
						},
						{
							"key": "Date",
							"value": "Wed, 20 May 2020 15:43:45 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						}
					],
					"cookie": [],
					"body": "{\n    \"path\": \"/api/products\",\n    \"query\": {},\n    \"headers\": {\n        \"authorization\": \"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1rUkNSak01T1RFeU9VTTNNekl3TVRRd01UaEVOVEJDUmpJME9UY3dPRGN3UTBJeFFUTkVRdyJ9.eyJpc3MiOiJodHRwczovL2luZmluaXR5YXJjLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZWMyY2ZhNzhiMjM5ZDBiZmU3MTMxNjgiLCJhdWQiOlsiaHR0cHM6Ly9zYW5sYW1pbmRpZS1kZW1vLWFwaSIsImh0dHBzOi8vaW5maW5pdHlhcmMuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTU4OTk4NDQyMCwiZXhwIjoxNTkwMDcwODIwLCJhenAiOiJjYVBTeDg0a0dGNGZSQ0x0VjNTU0todmduUVJGcmNPUCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.uLcOC2SNlcOCsXh91siKuglZgPInMucXaOR7djtDVPs9Pgkwhu-mZGZVYW1Qyv4xwz3AahA0DVvM7MKQufABcJLoNzkGZlQZTJ9vKvzzAcQrvuBe-upTVeO4qn1hgyxR3zhuMWjMSATsoNiWCalalSYiY6wWknjfkYDMsGAHL-EWlxCWzj3dp4XelXB5GckCG7ml8CD0NGhaTUxSC_zbnNgU6W5L5gtTF8R2KWpHNPffHf84mLIS6rHBRfzNLTcICcdzlpfso_fEad0U5NURK26LoKS5BRNJuVtbfAwCKV-ZLbk1U984Gd6ViYPZcwCdGWrauuKdMQo4gkBXzmqOTA\",\n        \"user-agent\": \"PostmanRuntime/7.24.1\",\n        \"accept\": \"*/*\",\n        \"cache-control\": \"no-cache\",\n        \"host\": \"localhost:3000\",\n        \"accept-encoding\": \"gzip, deflate, br\",\n        \"connection\": \"keep-alive\"\n    },\n    \"name\": \"HttpOkResponse\",\n    \"status\": 200,\n    \"statusText\": \"Ok\",\n    \"Ok\": true,\n    \"message\": \"Requested fulfilled with no errors.\",\n    \"body\": {\n        \"total_rows\": 16,\n        \"offset\": 0,\n        \"rows\": [\n            {\n                \"id\": \"Some-jazz-baby\",\n                \"key\": \"Some-jazz-baby\",\n                \"value\": {\n                    \"rev\": \"1-a001ee9c342a584b71438858aff7c46a\"\n                },\n                \"doc\": {\n                    \"maker\": \"The Jazzers\",\n                    \"title\": \"I wanna jazz all over you\",\n                    \"description\": \"Jazz is the heart and soul of love music emotion and nothing else but the blues come close in stirring those feelings inside that make you want to move.\",\n                    \"img\": \"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyxFi4NdACiHCKNcxoLgrGE6kSQASk6Qrjl1RMg9meyJyAUZt6&usqp=CAU\",\n                    \"url\": \"https://twitter.com/verified?lang=en\",\n                    \"_id\": \"Some-jazz-baby\",\n                    \"_rev\": \"1-a001ee9c342a584b71438858aff7c46a\"\n                }\n            },\n            {\n                \"id\": \"jenlooper-cactus\",\n                \"key\": \"jenlooper-cactus\",\n                \"value\": {\n                    \"rev\": \"1-382792a8d5e13c7b8f59d0a8d8656294\"\n                },\n                \"doc\": {\n                    \"maker\": \"@jenlooper\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg\",\n                    \"url\": \"https://www.hackster.io/agent-hawking-1/the-quantified-cactus-an-easy-plant-soil-moisture-sensor-e65393\",\n                    \"title\": \"The Quantified Cactus: An Easy Plant Soil Moisture Sensor\",\n                    \"description\": \"This project is a good learning project to get comfortable with soldering and programming an Arduino.\",\n                    \"_id\": \"jenlooper-cactus\",\n                    \"_rev\": \"1-382792a8d5e13c7b8f59d0a8d8656294\"\n                }\n            },\n            {\n                \"id\": \"jenlooper-light\",\n                \"key\": \"jenlooper-light\",\n                \"value\": {\n                    \"rev\": \"2-c80363614658ccd99ddec1d736072a53\"\n                },\n                \"doc\": {\n                    \"maker\": \"jenlooper69\",\n                    \"title\": \"A beautiful switch-on book light\",\n                    \"description\": \"Use craft items you have around the house, plus two LEDs and a LilyPad battery holder, to create a useful book light for reading in the dark.\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg\",\n                    \"url\": \"https://www.hackster.io/agent-hawking-1/book-light-dee7e4\",\n                    \"_id\": \"jenlooper-light\",\n                    \"_rev\": \"2-c80363614658ccd99ddec1d736072a53\"\n                }\n            },\n            {\n                \"id\": \"jenlooper-lightshow\",\n                \"key\": \"jenlooper-lightshow\",\n                \"value\": {\n                    \"rev\": \"1-83e19cb65e629040aabf8041b5da9e89\"\n                },\n                \"doc\": {\n                    \"maker\": \"@jenlooper\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567053-13938600-aa33-11e9-9780-104fe4019659.png\",\n                    \"url\": \"https://www.hackster.io/agent-hawking-1/bling-your-laptop-with-an-internet-connected-light-show-30e4db\",\n                    \"title\": \"Bling your Laptop with an Internet-Connected Light Show\",\n                    \"description\": \"Create a web-connected light-strip API controllable from your website, using the Particle.io.\",\n                    \"_id\": \"jenlooper-lightshow\",\n                    \"_rev\": \"1-83e19cb65e629040aabf8041b5da9e89\"\n                }\n            },\n            {\n                \"id\": \"jenlooper-survival\",\n                \"key\": \"jenlooper-survival\",\n                \"value\": {\n                    \"rev\": \"1-91cdb917001f528d66ff255f28f78b87\"\n                },\n                \"doc\": {\n                    \"maker\": \"jenlooper\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567051-13938600-aa33-11e9-8ae7-0b5c19aafab4.jpeg\",\n                    \"url\": \"https://www.hackster.io/agent-hawking-1/create-a-compact-survival-kit-38bfdb\",\n                    \"title\": \"Create a Compact Survival Kit with LED Track Lighting\",\n                    \"description\": \"Use an Alto_ids tin with Chibitronics sticker LEDs to create a light-up compact that doubles as a survival kit for the young hipster\",\n                    \"_id\": \"jenlooper-survival\",\n                    \"_rev\": \"1-91cdb917001f528d66ff255f28f78b87\"\n                }\n            },\n            {\n                \"id\": \"sailorhg-bubblesortpic\",\n                \"key\": \"sailorhg-bubblesortpic\",\n                \"value\": {\n                    \"rev\": \"1-2db26be6d7aada653a5cbc35f7a46d89\"\n                },\n                \"doc\": {\n                    \"maker\": \"sailorhg\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567054-13938600-aa33-11e9-9163-eec98e239b7a.png\",\n                    \"url\": \"https://twitter.com/sailorhg/status/1090107740049952770\",\n                    \"title\": \"Bubblesort Visualization\",\n                    \"description\": \"Visualization of sailor scouts sorted by bubblesort algorithm by their planet's distance from the sun\",\n                    \"_id\": \"sailorhg-bubblesortpic\",\n                    \"_rev\": \"1-2db26be6d7aada653a5cbc35f7a46d89\"\n                }\n            },\n            {\n                \"id\": \"sailorhg-corsage\",\n                \"key\": \"sailorhg-corsage\",\n                \"value\": {\n                    \"rev\": \"1-970b9f1e72dd20fcbe47da0bed5f8a02\"\n                },\n                \"doc\": {\n                    \"maker\": \"sailorhg\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567055-142c1c80-aa33-11e9-96ff-9fbac6413625.png\",\n                    \"url\": \"https://twitter.com/sailorhg/status/1090113666911891456\",\n                    \"title\": \"Light-up Corsage\",\n                    \"description\": \"Light-up corsage I made with my summer intern.\",\n                    \"_id\": \"sailorhg-corsage\",\n                    \"_rev\": \"1-970b9f1e72dd20fcbe47da0bed5f8a02\"\n                }\n            },\n            {\n                \"id\": \"sailorhg-kit\",\n                \"key\": \"sailorhg-kit\",\n                \"value\": {\n                    \"rev\": \"1-9d7dece528a93f295ab5ffa9f8746b98\"\n                },\n                \"doc\": {\n                    \"maker\": \"sailorhg\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567056-142c1c80-aa33-11e9-8682-10065d338145.png\",\n                    \"url\": \"https://twitter.com/sailorhg/status/1090122822007963648\",\n                    \"title\": \"Pastel hardware kit\",\n                    \"description\": \"Pastel hardware kits complete with custom manufactured pastel alligator clips.\",\n                    \"_id\": \"sailorhg-kit\",\n                    \"_rev\": \"1-9d7dece528a93f295ab5ffa9f8746b98\"\n                }\n            },\n            {\n                \"id\": \"sailorhg-led\",\n                \"key\": \"sailorhg-led\",\n                \"value\": {\n                    \"rev\": \"1-4c64253433480f1e26c460fc3f84e9a2\"\n                },\n                \"doc\": {\n                    \"maker\": \"sailorhg\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567052-13938600-aa33-11e9-9a88-cd842073ba44.jpg\",\n                    \"url\": \"https://twitter.com/sailorhg/status/1090117277540745216\",\n                    \"title\": \"Heart-shaped LED\",\n                    \"description\": \"custom molded heart shaped LED with sprinkles.\",\n                    \"_id\": \"sailorhg-led\",\n                    \"_rev\": \"1-4c64253433480f1e26c460fc3f84e9a2\"\n                }\n            },\n            {\n                \"id\": \"selinazawacki-moon\",\n                \"key\": \"selinazawacki-moon\",\n                \"value\": {\n                    \"rev\": \"1-265e0a6f3c5e956589b21203c4369f9e\"\n                },\n                \"doc\": {\n                    \"maker\": \"selinazawacki\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567057-142c1c80-aa33-11e9-9781-9e442418eaab.png\",\n                    \"url\": \"https://www.instagram.com/p/BFktVYPinKQ/\",\n                    \"title\": \"Holographic Dark Moon Necklace\",\n                    \"description\": \"Not sure if I'll be making more, get it while I have it in the store.\",\n                    \"_id\": \"selinazawacki-moon\",\n                    \"_rev\": \"1-265e0a6f3c5e956589b21203c4369f9e\"\n                }\n            },\n            {\n                \"id\": \"selinazawacki-shirt\",\n                \"key\": \"selinazawacki-shirt\",\n                \"value\": {\n                    \"rev\": \"1-f0564764a070c2b61b16c080da2c56a0\"\n                },\n                \"doc\": {\n                    \"maker\": \"selinazawacki\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567058-142c1c80-aa33-11e9-89fb-b4f30d84d69d.png\",\n                    \"url\": \"https://www.instagram.com/p/BEXlpiZCnJ3/\",\n                    \"title\": \"Floppy Crop\",\n                    \"description\": \"Used up the Diskette fabric today to make 2 of these crops.\",\n                    \"_id\": \"selinazawacki-shirt\",\n                    \"_rev\": \"1-f0564764a070c2b61b16c080da2c56a0\"\n                }\n            },\n            {\n                \"id\": \"selinazawacki-soi-pins\",\n                \"key\": \"selinazawacki-soi-pins\",\n                \"value\": {\n                    \"rev\": \"1-b52d06b84bb274f7dc3572b54487dc80\"\n                },\n                \"doc\": {\n                    \"maker\": \"selinazawacki\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567059-142c1c80-aa33-11e9-939b-2ecf4492786d.png\",\n                    \"url\": \"https://www.instagram.com/p/BNm6hZzDoEF/\",\n                    \"title\": \"Sick of the Internet Pins\",\n                    \"description\": \"Still some time to enter the pin/sticker giveaway! \",\n                    \"_id\": \"selinazawacki-soi-pins\",\n                    \"_rev\": \"1-b52d06b84bb274f7dc3572b54487dc80\"\n                }\n            },\n            {\n                \"id\": \"selinazawacki-soi-shirt\",\n                \"key\": \"selinazawacki-soi-shirt\",\n                \"value\": {\n                    \"rev\": \"1-131198d6157eb85a76c2ae32aa006ae3\"\n                },\n                \"doc\": {\n                    \"maker\": \"selinazawacki\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567060-142c1c80-aa33-11e9-8188-5a4803844a9e.png\",\n                    \"url\": \"https://www.instagram.com/p/BNvESj-j8PI/\",\n                    \"title\": \"Black Sweatshirt\",\n                    \"description\": \"Black sweatshirt hoody with the Sick of the Internet logo.\",\n                    \"_id\": \"selinazawacki-soi-shirt\",\n                    \"_rev\": \"1-131198d6157eb85a76c2ae32aa006ae3\"\n                }\n            },\n            {\n                \"id\": \"vogueandcode-hipster-dev-bro\",\n                \"key\": \"vogueandcode-hipster-dev-bro\",\n                \"value\": {\n                    \"rev\": \"1-546d90d3bae742a795991266570efaea\"\n                },\n                \"doc\": {\n                    \"maker\": \"vogueandcode\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567061-14c4b300-aa33-11e9-9fee-63ff2c0c9823.png\",\n                    \"url\": \"https://www.vogueandcode.com/shop/hipster-dev-bro\",\n                    \"title\": \"Hipster Dev\",\n                    \"description\": \"Hipster Dev is busy coding away while styled in a camo jacket and orange beanie.\",\n                    \"_id\": \"vogueandcode-hipster-dev-bro\",\n                    \"_rev\": \"1-546d90d3bae742a795991266570efaea\"\n                }\n            },\n            {\n                \"id\": \"vogueandcode-pretty-girls-code-tee\",\n                \"key\": \"vogueandcode-pretty-girls-code-tee\",\n                \"value\": {\n                    \"rev\": \"1-0bb9d1f16af7faa7e111ad02909742f3\"\n                },\n                \"doc\": {\n                    \"maker\": \"vogueandcode\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567062-14c4b300-aa33-11e9-9dcd-8bfed4ece810.png\",\n                    \"url\": \"https://www.vogueandcode.com/shop/pretty-girls-code-tee\",\n                    \"title\": \"Pretty Girls Code Tee\",\n                    \"description\": \"Everyone’s favorite design is finally here on a tee! The Pretty Girls Code crew-neck tee is available in a soft pink with red writing.\",\n                    \"_id\": \"vogueandcode-pretty-girls-code-tee\",\n                    \"_rev\": \"1-0bb9d1f16af7faa7e111ad02909742f3\"\n                }\n            },\n            {\n                \"id\": \"vogueandcode-ruby-sis-2\",\n                \"key\": \"vogueandcode-ruby-sis-2\",\n                \"value\": {\n                    \"rev\": \"2-45f3a19cd605e04c67af400d0164dc9e\"\n                },\n                \"doc\": {\n                    \"maker\": \"vogueandcode\",\n                    \"title\": \"Ruby Sista\",\n                    \"description\": \"Styled in a dashiki, Ruby Sis is listening to music while coding in her favorite language, Ruby!\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567063-14c4b300-aa33-11e9-8515-bcb866da9ea3.png\",\n                    \"url\": \"https://www.vogueandcode.com/shop/ruby-sis-2\",\n                    \"_id\": \"vogueandcode-ruby-sis-2\",\n                    \"_rev\": \"2-45f3a19cd605e04c67af400d0164dc9e\"\n                }\n            }\n        ],\n        \"table\": \"Products\",\n        \"retrieved\": \"2020-05-20T15:43:45.830Z\"\n    }\n}"
				}
			]
		},
		{
			"name": "4_api-access-token-call",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"client_id\":\"PpyXo0wcskKKn6yffoDokQI7G7sW656J\",\n\t\"client_secret\":\"_4fMsc9OqDfCgJBlPNog53LllQ4o3w6yW2BVm2jlq6jy-VI6VEGzxSowX1Trl_WD\",\n\t\"audience\":\"https://sanlamindie-demo-api\",\n\t\"grant_type\":\"client_credentials\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://infinityarc.eu.auth0.com/oauth/token?content-type=application/json",
					"protocol": "https",
					"host": [
						"infinityarc",
						"eu",
						"auth0",
						"com"
					],
					"path": [
						"oauth",
						"token"
					],
					"query": [
						{
							"key": "content-type",
							"value": "application/json"
						}
					]
				}
			},
			"response": [
				{
					"name": "https://infinityarc.eu.auth0.com/oauth/token",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n\t\"client_id\":\"PpyXo0wcskKKn6yffoDokQI7G7sW656J\",\n\t\"client_secret\":\"_4fMsc9OqDfCgJBlPNog53LllQ4o3w6yW2BVm2jlq6jy-VI6VEGzxSowX1Trl_WD\",\n\t\"audience\":\"https://sanlamindie-demo-api\",\n\t\"grant_type\":\"client_credentials\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://infinityarc.eu.auth0.com/oauth/token?content-type=application/json",
							"protocol": "https",
							"host": [
								"infinityarc",
								"eu",
								"auth0",
								"com"
							],
							"path": [
								"oauth",
								"token"
							],
							"query": [
								{
									"key": "content-type",
									"value": "application/json"
								}
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Date",
							"value": "Wed, 20 May 2020 17:06:09 GMT"
						},
						{
							"key": "Content-Type",
							"value": "application/json"
						},
						{
							"key": "Transfer-Encoding",
							"value": "chunked"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Server",
							"value": "nginx"
						},
						{
							"key": "Vary",
							"value": "Accept-Encoding"
						},
						{
							"key": "ot-tracer-spanid",
							"value": "05356eb84cd8fab7"
						},
						{
							"key": "ot-tracer-traceid",
							"value": "622df58e4cf3f599"
						},
						{
							"key": "ot-tracer-sampled",
							"value": "true"
						},
						{
							"key": "ot-baggage-auth0-request-id",
							"value": "23133e6c1e0e3128b75e22b0"
						},
						{
							"key": "X-Auth0-RequestId",
							"value": "c445dcc64dfa6883ec3a"
						},
						{
							"key": "X-RateLimit-Limit",
							"value": "30"
						},
						{
							"key": "X-RateLimit-Remaining",
							"value": "29"
						},
						{
							"key": "X-RateLimit-Reset",
							"value": "1589994370"
						},
						{
							"key": "Cache-Control",
							"value": "no-store"
						},
						{
							"key": "Pragma",
							"value": "no-cache"
						},
						{
							"key": "Strict-Transport-Security",
							"value": "max-age=15724800"
						},
						{
							"key": "X-Robots-Tag",
							"value": "noindex, nofollow, nosnippet, noarchive"
						},
						{
							"key": "Content-Encoding",
							"value": "gzip"
						}
					],
					"cookie": [],
					"body": "{\n    \"access_token\": \"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1rUkNSak01T1RFeU9VTTNNekl3TVRRd01UaEVOVEJDUmpJME9UY3dPRGN3UTBJeFFUTkVRdyJ9.eyJpc3MiOiJodHRwczovL2luZmluaXR5YXJjLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJQcHlYbzB3Y3NrS0tuNnlmZm9Eb2tRSTdHN3NXNjU2SkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9zYW5sYW1pbmRpZS1kZW1vLWFwaSIsImlhdCI6MTU4OTk5NDM2OSwiZXhwIjoxNTkwMDgwNzY5LCJhenAiOiJQcHlYbzB3Y3NrS0tuNnlmZm9Eb2tRSTdHN3NXNjU2SiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.uPmnaMZWFcXNh1C4kAqpIYEuz0itMpHODFS-5Q7hpOkvQW2tSqqSKkvgbq1ciJ3JdQnVMa0gK0j-Q-neMWykod-dJyW71-DsDDC-pZ8TH-G5P1LSA8TTTlPM3vmDjPjlwlG40Fca5_GUOKFyDNOgsjE-WCqG9qGmsbvnvXhhQ_RfDOTbIneXTHOi609fjS8MPquxaPZxoHuu_rmkqhlCnfE1O3WaFxwHag470nZmCFCWs7YJiPse1qQHZCrX2P2KsUSfE84O9HvX-WWea0lGq64KbcZpqSui-Yga4ZDUacpQdM48zXiDcIusjCOirIQzC6p66BKZtjFMSkRDWxovVA\",\n    \"expires_in\": 86400,\n    \"token_type\": \"Bearer\"\n}"
				}
			]
		},
		{
			"name": "Call-for-user-authentication",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://infinityarc.eu.auth0.com/login?state=g6Fo2SBESFczV0JnSlRxZXJsdHdiNnkxaXNIVTA2ZmhXazlJcqN0aWTZIDU0aF8xeS15ZHhFR2d4dVhfWExWeF9SNVhIa19lVVdto2NpZNkgY2FQU3g4NGtHRjRmUkNMdFYzU1NLaHZnblFSRnJjT1A&client=caPSx84kGF4fRCLtV3SSKhvgnQRFrcOP&protocol=oauth2&redirect_uri=http%3A%2F%2Flocalhost%3A4200&audience=https%3A%2F%2Fsanlamindie-demo-api&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=VEliN24xOWJPflNwSk82X25GWDJUc25uN1EtdmZLbjdsUHJXN2tpQ29VQQ%3D%3D&code_challenge=gPm17fH7SWo_nDjxGY7om22_aJVSzLInTCVz-U3CVHY&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuOC4xIn0%3D",
					"protocol": "https",
					"host": [
						"infinityarc",
						"eu",
						"auth0",
						"com"
					],
					"path": [
						"login"
					],
					"query": [
						{
							"key": "state",
							"value": "g6Fo2SBESFczV0JnSlRxZXJsdHdiNnkxaXNIVTA2ZmhXazlJcqN0aWTZIDU0aF8xeS15ZHhFR2d4dVhfWExWeF9SNVhIa19lVVdto2NpZNkgY2FQU3g4NGtHRjRmUkNMdFYzU1NLaHZnblFSRnJjT1A"
						},
						{
							"key": "client",
							"value": "caPSx84kGF4fRCLtV3SSKhvgnQRFrcOP"
						},
						{
							"key": "protocol",
							"value": "oauth2"
						},
						{
							"key": "redirect_uri",
							"value": "http%3A%2F%2Flocalhost%3A4200"
						},
						{
							"key": "audience",
							"value": "https%3A%2F%2Fsanlamindie-demo-api"
						},
						{
							"key": "scope",
							"value": "openid%20profile%20email"
						},
						{
							"key": "response_type",
							"value": "code"
						},
						{
							"key": "response_mode",
							"value": "query"
						},
						{
							"key": "nonce",
							"value": "VEliN24xOWJPflNwSk82X25GWDJUc25uN1EtdmZLbjdsUHJXN2tpQ29VQQ%3D%3D"
						},
						{
							"key": "code_challenge",
							"value": "gPm17fH7SWo_nDjxGY7om22_aJVSzLInTCVz-U3CVHY"
						},
						{
							"key": "code_challenge_method",
							"value": "S256"
						},
						{
							"key": "auth0Client",
							"value": "eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuOC4xIn0%3D"
						}
					]
				}
			},
			"response": [
				{
					"name": "Call-for-user-authentication",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://infinityarc.eu.auth0.com/login?state=g6Fo2SBESFczV0JnSlRxZXJsdHdiNnkxaXNIVTA2ZmhXazlJcqN0aWTZIDU0aF8xeS15ZHhFR2d4dVhfWExWeF9SNVhIa19lVVdto2NpZNkgY2FQU3g4NGtHRjRmUkNMdFYzU1NLaHZnblFSRnJjT1A&client=caPSx84kGF4fRCLtV3SSKhvgnQRFrcOP&protocol=oauth2&redirect_uri=http%3A%2F%2Flocalhost%3A4200&audience=https%3A%2F%2Fsanlamindie-demo-api&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=VEliN24xOWJPflNwSk82X25GWDJUc25uN1EtdmZLbjdsUHJXN2tpQ29VQQ%3D%3D&code_challenge=gPm17fH7SWo_nDjxGY7om22_aJVSzLInTCVz-U3CVHY&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuOC4xIn0%3D",
							"protocol": "https",
							"host": [
								"infinityarc",
								"eu",
								"auth0",
								"com"
							],
							"path": [
								"login"
							],
							"query": [
								{
									"key": "state",
									"value": "g6Fo2SBESFczV0JnSlRxZXJsdHdiNnkxaXNIVTA2ZmhXazlJcqN0aWTZIDU0aF8xeS15ZHhFR2d4dVhfWExWeF9SNVhIa19lVVdto2NpZNkgY2FQU3g4NGtHRjRmUkNMdFYzU1NLaHZnblFSRnJjT1A"
								},
								{
									"key": "client",
									"value": "caPSx84kGF4fRCLtV3SSKhvgnQRFrcOP"
								},
								{
									"key": "protocol",
									"value": "oauth2"
								},
								{
									"key": "redirect_uri",
									"value": "http%3A%2F%2Flocalhost%3A4200"
								},
								{
									"key": "audience",
									"value": "https%3A%2F%2Fsanlamindie-demo-api"
								},
								{
									"key": "scope",
									"value": "openid%20profile%20email"
								},
								{
									"key": "response_type",
									"value": "code"
								},
								{
									"key": "response_mode",
									"value": "query"
								},
								{
									"key": "nonce",
									"value": "VEliN24xOWJPflNwSk82X25GWDJUc25uN1EtdmZLbjdsUHJXN2tpQ29VQQ%3D%3D"
								},
								{
									"key": "code_challenge",
									"value": "gPm17fH7SWo_nDjxGY7om22_aJVSzLInTCVz-U3CVHY"
								},
								{
									"key": "code_challenge_method",
									"value": "S256"
								},
								{
									"key": "auth0Client",
									"value": "eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuOC4xIn0%3D"
								}
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "html",
					"header": [
						{
							"key": "Date",
							"value": "Wed, 20 May 2020 16:03:55 GMT"
						},
						{
							"key": "Content-Type",
							"value": "text/html; charset=utf-8"
						},
						{
							"key": "Transfer-Encoding",
							"value": "chunked"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Server",
							"value": "nginx"
						},
						{
							"key": "Vary",
							"value": "Accept-Encoding"
						},
						{
							"key": "ot-tracer-spanid",
							"value": "328bb23053fb3b9f"
						},
						{
							"key": "ot-tracer-traceid",
							"value": "1c9f073929e88ffe"
						},
						{
							"key": "ot-tracer-sampled",
							"value": "true"
						},
						{
							"key": "ot-baggage-auth0-request-id",
							"value": "21060782617854fc49ec2e2e"
						},
						{
							"key": "X-Auth0-RequestId",
							"value": "d2a303fdb182c353d135"
						},
						{
							"key": "X-RateLimit-Limit",
							"value": "300"
						},
						{
							"key": "X-RateLimit-Remaining",
							"value": "299"
						},
						{
							"key": "X-RateLimit-Reset",
							"value": "1589990636"
						},
						{
							"key": "set-cookie",
							"value": "_csrf=Aa5o7CsBVLK7VDJnrCvOdyy_; Max-Age=864000; Path=/usernamepassword/login; HttpOnly; Secure"
						},
						{
							"key": "X-Robots-Tag",
							"value": "noindex, nofollow"
						},
						{
							"key": "X-Robots-Tag",
							"value": "noindex, nofollow, nosnippet, noarchive"
						},
						{
							"key": "X-Frame-Options",
							"value": "deny"
						},
						{
							"key": "Content-Security-Policy",
							"value": "frame-ancestors 'none'"
						},
						{
							"key": "X-XSS-Protection",
							"value": "1; mode=block"
						},
						{
							"key": "X-Content-Type-Options",
							"value": "nosniff"
						},
						{
							"key": "Referrer-Policy",
							"value": "same-origin"
						},
						{
							"key": "ETag",
							"value": "W/\"a2c-o6AGRSk/+/E+ftnCXBLIsKF6bMs\""
						},
						{
							"key": "cache-control",
							"value": "private, no-store, no-cache, must-revalidate, post-check=0, pre-check=0, no-transform"
						},
						{
							"key": "Strict-Transport-Security",
							"value": "max-age=15724800"
						},
						{
							"key": "Content-Encoding",
							"value": "gzip"
						}
					],
					"cookie": [],
					"body": "<!DOCTYPE html>\n<html>\n    <head>\n        <title>Sign In with Auth0</title>\n        <meta charset=\"UTF-8\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n        <meta name=\"robots\" content=\"noindex, nofollow\">\n        <link rel=\"shortcut icon\" href=\"https://cdn.auth0.com/styleguide/components/2.0.2/media/logos/img/favicon.png\">\n    </head>\n    <body>\n        <!--[if IE 8]>\n        <script src=\"//cdnjs.cloudflare.com/ajax/libs/ie8/0.2.5/ie8.js\"></script>\n        <![endif]-->\n        <!--[if lte IE 9]>\n        <script src=\"https://cdn.auth0.com/js/base64.js\"></script>\n        <script src=\"https://cdn.auth0.com/js/es5-shim.min.js\"></script>\n        <![endif]-->\n        <script src=\"https://cdn.auth0.com/js/lock/11.24/lock.min.js\"></script>\n        <script>\n    var authParams = JSON.parse(decodeURIComponent(escape(window.atob('eyJwcm90b2NvbCI6Im9hdXRoMiIsImF1ZGllbmNlIjoiaHR0cHM6Ly9zYW5sYW1pbmRpZS1kZW1vLWFwaSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJyZXNwb25zZV9tb2RlIjoicXVlcnkiLCJub25jZSI6IlZFbGlOMjR4T1dKUGZsTndTazgyWDI1R1dESlVjMjV1TjFFdGRtWkxiamRzVUhKWE4ydHBRMjlWUVE9PSIsImNvZGVfY2hhbGxlbmdlIjoiZ1BtMTdmSDdTV29fbkRqeEdZN29tMjJfYUpWU3pMSW5UQ1Z6LVUzQ1ZIWSIsImNvZGVfY2hhbGxlbmdlX21ldGhvZCI6IlMyNTYiLCJhdXRoMENsaWVudCI6ImV5SnVZVzFsSWpvaVlYVjBhREF0YzNCaExXcHpJaXdpZG1WeWMybHZiaUk2SWpFdU9DNHhJbjA9IiwidGVuYW50IjoiaW5maW5pdHlhcmMiLCJ0eXBlIjoiY29kZSIsImNsaWVudElEIjoiY2FQU3g4NGtHRjRmUkNMdFYzU1NLaHZnblFSRnJjT1AiLCJyZWRpcmVjdFVSSSI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCIsIl9jc3JmIjoiYU9jWlFKTjAtdEJSa0hXbDJWMmRWWkZiUy01RkJaS2JPbi1nIiwiX2ludHN0YXRlIjoiZGVwcmVjYXRlZCIsInN0YXRlIjoiZzZGbzJTQkVTRmN6VjBKblNsUnhaWEpzZEhkaU5ua3hhWE5JVlRBMlptaFhhemxKY3FOMGFXVFpJRFUwYUY4eGVTMTVaSGhGUjJkNGRWaGZXRXhXZUY5U05WaElhMTlsVlZkdG8yTnBaTmtnWTJGUVUzZzROR3RIUmpSbVVrTk1kRll6VTFOTGFIWm5ibEZTUm5KalQxQSJ9'))));\n    var lock = new Auth0Lock(\n      'caPSx84kGF4fRCLtV3SSKhvgnQRFrcOP',\n      'infinityarc.eu.auth0.com', {\n        \n        configurationBaseUrl: 'https://cdn.eu.auth0.com/',\n        \n        closable: false,\n        \n        \n        \n        \n        languageDictionary: { title: 'Sanlam-Indie' },\n        \n        theme: {\n          logo: '/img/badge.png'\n          \n        },\n        \n        auth: {\n          redirectUrl: 'http://localhost:4200',\n          responseType: 'code',\n          params: authParams\n        },\n        defaultADUsernameFromEmailPrefix: false,\n        \n        overrides: {\n          __tenant: 'infinityarc',\n          __token_issuer: 'https://infinityarc.eu.auth0.com/'\n        }\n      });\n\n    lock.show();\n  </script>\n    </body>\n</html>"
				}
			]
		},
		{
			"name": "1_Unauth-response",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/test",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"test"
					]
				}
			},
			"response": [
				{
					"name": "Unauth-response",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/test",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"test"
							]
						}
					},
					"status": "Unauthorized",
					"code": 401,
					"_postman_previewlanguage": "html",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Security-Policy",
							"value": "default-src 'none'"
						},
						{
							"key": "X-Content-Type-Options",
							"value": "nosniff"
						},
						{
							"key": "Content-Type",
							"value": "text/html; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "2240"
						},
						{
							"key": "Date",
							"value": "Wed, 20 May 2020 16:50:15 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						}
					],
					"cookie": [],
					"body": "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <title>Error</title>\n    </head>\n    <body>\n        <pre>UnauthorizedError: No authorization token was found\n            <br> &nbsp; &nbsp;at middleware (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express-jwt/lib/index.js:76:21)\n            <br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/layer.js:95:5)\n            <br> &nbsp; &nbsp;at trim_prefix (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/index.js:317:13)\n            <br> &nbsp; &nbsp;at /Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/index.js:284:7\n            <br> &nbsp; &nbsp;at Function.process_params (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/index.js:335:12)\n            <br> &nbsp; &nbsp;at next (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/index.js:275:10)\n            <br> &nbsp; &nbsp;at next (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/route.js:127:14)\n            <br> &nbsp; &nbsp;at next (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/route.js:131:14)\n            <br> &nbsp; &nbsp;at next (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/route.js:131:14)\n            <br> &nbsp; &nbsp;at next (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/route.js:131:14)\n            <br> &nbsp; &nbsp;at next (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/route.js:131:14)\n            <br> &nbsp; &nbsp;at next (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/route.js:131:14)\n            <br> &nbsp; &nbsp;at next (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/route.js:131:14)\n            <br> &nbsp; &nbsp;at next (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/route.js:131:14)\n            <br> &nbsp; &nbsp;at next (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/route.js:131:14)\n            <br> &nbsp; &nbsp;at next (/Users/cliff/git/express-json-api-with-angular/api/node_modules/express/lib/router/route.js:131:14)\n        </pre>\n    </body>\n</html>"
				}
			]
		},
		{
			"name": "3_get-one-product",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1rUkNSak01T1RFeU9VTTNNekl3TVRRd01UaEVOVEJDUmpJME9UY3dPRGN3UTBJeFFUTkVRdyJ9.eyJpc3MiOiJodHRwczovL2luZmluaXR5YXJjLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZWMyY2ZhNzhiMjM5ZDBiZmU3MTMxNjgiLCJhdWQiOlsiaHR0cHM6Ly9zYW5sYW1pbmRpZS1kZW1vLWFwaSIsImh0dHBzOi8vaW5maW5pdHlhcmMuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTU4OTk4NDQyMCwiZXhwIjoxNTkwMDcwODIwLCJhenAiOiJjYVBTeDg0a0dGNGZSQ0x0VjNTU0todmduUVJGcmNPUCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.uLcOC2SNlcOCsXh91siKuglZgPInMucXaOR7djtDVPs9Pgkwhu-mZGZVYW1Qyv4xwz3AahA0DVvM7MKQufABcJLoNzkGZlQZTJ9vKvzzAcQrvuBe-upTVeO4qn1hgyxR3zhuMWjMSATsoNiWCalalSYiY6wWknjfkYDMsGAHL-EWlxCWzj3dp4XelXB5GckCG7ml8CD0NGhaTUxSC_zbnNgU6W5L5gtTF8R2KWpHNPffHf84mLIS6rHBRfzNLTcICcdzlpfso_fEad0U5NURK26LoKS5BRNJuVtbfAwCKV-ZLbk1U984Gd6ViYPZcwCdGWrauuKdMQo4gkBXzmqOTA",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/products?id=Some-jazz-baby",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products"
					],
					"query": [
						{
							"key": "id",
							"value": "Some-jazz-baby"
						}
					]
				}
			},
			"response": [
				{
					"name": "Authorised-Request-Test",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/test",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"test"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "html",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "text/html; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "18"
						},
						{
							"key": "ETag",
							"value": "W/\"12-JYyGyu4sAblo3Rx7IwnPFL9zWaY\""
						},
						{
							"key": "Date",
							"value": "Wed, 20 May 2020 16:54:25 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						}
					],
					"cookie": [],
					"body": "Request Authorized"
				}
			]
		},
		{
			"name": "2_get-all-products",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1rUkNSak01T1RFeU9VTTNNekl3TVRRd01UaEVOVEJDUmpJME9UY3dPRGN3UTBJeFFUTkVRdyJ9.eyJpc3MiOiJodHRwczovL2luZmluaXR5YXJjLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZWMyY2ZhNzhiMjM5ZDBiZmU3MTMxNjgiLCJhdWQiOlsiaHR0cHM6Ly9zYW5sYW1pbmRpZS1kZW1vLWFwaSIsImh0dHBzOi8vaW5maW5pdHlhcmMuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTU4OTk4NDQyMCwiZXhwIjoxNTkwMDcwODIwLCJhenAiOiJjYVBTeDg0a0dGNGZSQ0x0VjNTU0todmduUVJGcmNPUCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.uLcOC2SNlcOCsXh91siKuglZgPInMucXaOR7djtDVPs9Pgkwhu-mZGZVYW1Qyv4xwz3AahA0DVvM7MKQufABcJLoNzkGZlQZTJ9vKvzzAcQrvuBe-upTVeO4qn1hgyxR3zhuMWjMSATsoNiWCalalSYiY6wWknjfkYDMsGAHL-EWlxCWzj3dp4XelXB5GckCG7ml8CD0NGhaTUxSC_zbnNgU6W5L5gtTF8R2KWpHNPffHf84mLIS6rHBRfzNLTcICcdzlpfso_fEad0U5NURK26LoKS5BRNJuVtbfAwCKV-ZLbk1U984Gd6ViYPZcwCdGWrauuKdMQo4gkBXzmqOTA",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/products",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products"
					]
				}
			},
			"response": [
				{
					"name": "localhost:3000/api/products",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3000/api/products",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"products"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "9806"
						},
						{
							"key": "ETag",
							"value": "W/\"264e-cuWkGKwI5qdKOpI/5uMYqjbljfA\""
						},
						{
							"key": "Date",
							"value": "Wed, 20 May 2020 15:43:45 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						}
					],
					"cookie": [],
					"body": "{\n    \"path\": \"/api/products\",\n    \"query\": {},\n    \"headers\": {\n        \"authorization\": \"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1rUkNSak01T1RFeU9VTTNNekl3TVRRd01UaEVOVEJDUmpJME9UY3dPRGN3UTBJeFFUTkVRdyJ9.eyJpc3MiOiJodHRwczovL2luZmluaXR5YXJjLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZWMyY2ZhNzhiMjM5ZDBiZmU3MTMxNjgiLCJhdWQiOlsiaHR0cHM6Ly9zYW5sYW1pbmRpZS1kZW1vLWFwaSIsImh0dHBzOi8vaW5maW5pdHlhcmMuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTU4OTk4NDQyMCwiZXhwIjoxNTkwMDcwODIwLCJhenAiOiJjYVBTeDg0a0dGNGZSQ0x0VjNTU0todmduUVJGcmNPUCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.uLcOC2SNlcOCsXh91siKuglZgPInMucXaOR7djtDVPs9Pgkwhu-mZGZVYW1Qyv4xwz3AahA0DVvM7MKQufABcJLoNzkGZlQZTJ9vKvzzAcQrvuBe-upTVeO4qn1hgyxR3zhuMWjMSATsoNiWCalalSYiY6wWknjfkYDMsGAHL-EWlxCWzj3dp4XelXB5GckCG7ml8CD0NGhaTUxSC_zbnNgU6W5L5gtTF8R2KWpHNPffHf84mLIS6rHBRfzNLTcICcdzlpfso_fEad0U5NURK26LoKS5BRNJuVtbfAwCKV-ZLbk1U984Gd6ViYPZcwCdGWrauuKdMQo4gkBXzmqOTA\",\n        \"user-agent\": \"PostmanRuntime/7.24.1\",\n        \"accept\": \"*/*\",\n        \"cache-control\": \"no-cache\",\n        \"host\": \"localhost:3000\",\n        \"accept-encoding\": \"gzip, deflate, br\",\n        \"connection\": \"keep-alive\"\n    },\n    \"name\": \"HttpOkResponse\",\n    \"status\": 200,\n    \"statusText\": \"Ok\",\n    \"Ok\": true,\n    \"message\": \"Requested fulfilled with no errors.\",\n    \"body\": {\n        \"total_rows\": 16,\n        \"offset\": 0,\n        \"rows\": [\n            {\n                \"id\": \"Some-jazz-baby\",\n                \"key\": \"Some-jazz-baby\",\n                \"value\": {\n                    \"rev\": \"1-a001ee9c342a584b71438858aff7c46a\"\n                },\n                \"doc\": {\n                    \"maker\": \"The Jazzers\",\n                    \"title\": \"I wanna jazz all over you\",\n                    \"description\": \"Jazz is the heart and soul of love music emotion and nothing else but the blues come close in stirring those feelings inside that make you want to move.\",\n                    \"img\": \"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyxFi4NdACiHCKNcxoLgrGE6kSQASk6Qrjl1RMg9meyJyAUZt6&usqp=CAU\",\n                    \"url\": \"https://twitter.com/verified?lang=en\",\n                    \"_id\": \"Some-jazz-baby\",\n                    \"_rev\": \"1-a001ee9c342a584b71438858aff7c46a\"\n                }\n            },\n            {\n                \"id\": \"jenlooper-cactus\",\n                \"key\": \"jenlooper-cactus\",\n                \"value\": {\n                    \"rev\": \"1-382792a8d5e13c7b8f59d0a8d8656294\"\n                },\n                \"doc\": {\n                    \"maker\": \"@jenlooper\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg\",\n                    \"url\": \"https://www.hackster.io/agent-hawking-1/the-quantified-cactus-an-easy-plant-soil-moisture-sensor-e65393\",\n                    \"title\": \"The Quantified Cactus: An Easy Plant Soil Moisture Sensor\",\n                    \"description\": \"This project is a good learning project to get comfortable with soldering and programming an Arduino.\",\n                    \"_id\": \"jenlooper-cactus\",\n                    \"_rev\": \"1-382792a8d5e13c7b8f59d0a8d8656294\"\n                }\n            },\n            {\n                \"id\": \"jenlooper-light\",\n                \"key\": \"jenlooper-light\",\n                \"value\": {\n                    \"rev\": \"2-c80363614658ccd99ddec1d736072a53\"\n                },\n                \"doc\": {\n                    \"maker\": \"jenlooper69\",\n                    \"title\": \"A beautiful switch-on book light\",\n                    \"description\": \"Use craft items you have around the house, plus two LEDs and a LilyPad battery holder, to create a useful book light for reading in the dark.\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg\",\n                    \"url\": \"https://www.hackster.io/agent-hawking-1/book-light-dee7e4\",\n                    \"_id\": \"jenlooper-light\",\n                    \"_rev\": \"2-c80363614658ccd99ddec1d736072a53\"\n                }\n            },\n            {\n                \"id\": \"jenlooper-lightshow\",\n                \"key\": \"jenlooper-lightshow\",\n                \"value\": {\n                    \"rev\": \"1-83e19cb65e629040aabf8041b5da9e89\"\n                },\n                \"doc\": {\n                    \"maker\": \"@jenlooper\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567053-13938600-aa33-11e9-9780-104fe4019659.png\",\n                    \"url\": \"https://www.hackster.io/agent-hawking-1/bling-your-laptop-with-an-internet-connected-light-show-30e4db\",\n                    \"title\": \"Bling your Laptop with an Internet-Connected Light Show\",\n                    \"description\": \"Create a web-connected light-strip API controllable from your website, using the Particle.io.\",\n                    \"_id\": \"jenlooper-lightshow\",\n                    \"_rev\": \"1-83e19cb65e629040aabf8041b5da9e89\"\n                }\n            },\n            {\n                \"id\": \"jenlooper-survival\",\n                \"key\": \"jenlooper-survival\",\n                \"value\": {\n                    \"rev\": \"1-91cdb917001f528d66ff255f28f78b87\"\n                },\n                \"doc\": {\n                    \"maker\": \"jenlooper\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567051-13938600-aa33-11e9-8ae7-0b5c19aafab4.jpeg\",\n                    \"url\": \"https://www.hackster.io/agent-hawking-1/create-a-compact-survival-kit-38bfdb\",\n                    \"title\": \"Create a Compact Survival Kit with LED Track Lighting\",\n                    \"description\": \"Use an Alto_ids tin with Chibitronics sticker LEDs to create a light-up compact that doubles as a survival kit for the young hipster\",\n                    \"_id\": \"jenlooper-survival\",\n                    \"_rev\": \"1-91cdb917001f528d66ff255f28f78b87\"\n                }\n            },\n            {\n                \"id\": \"sailorhg-bubblesortpic\",\n                \"key\": \"sailorhg-bubblesortpic\",\n                \"value\": {\n                    \"rev\": \"1-2db26be6d7aada653a5cbc35f7a46d89\"\n                },\n                \"doc\": {\n                    \"maker\": \"sailorhg\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567054-13938600-aa33-11e9-9163-eec98e239b7a.png\",\n                    \"url\": \"https://twitter.com/sailorhg/status/1090107740049952770\",\n                    \"title\": \"Bubblesort Visualization\",\n                    \"description\": \"Visualization of sailor scouts sorted by bubblesort algorithm by their planet's distance from the sun\",\n                    \"_id\": \"sailorhg-bubblesortpic\",\n                    \"_rev\": \"1-2db26be6d7aada653a5cbc35f7a46d89\"\n                }\n            },\n            {\n                \"id\": \"sailorhg-corsage\",\n                \"key\": \"sailorhg-corsage\",\n                \"value\": {\n                    \"rev\": \"1-970b9f1e72dd20fcbe47da0bed5f8a02\"\n                },\n                \"doc\": {\n                    \"maker\": \"sailorhg\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567055-142c1c80-aa33-11e9-96ff-9fbac6413625.png\",\n                    \"url\": \"https://twitter.com/sailorhg/status/1090113666911891456\",\n                    \"title\": \"Light-up Corsage\",\n                    \"description\": \"Light-up corsage I made with my summer intern.\",\n                    \"_id\": \"sailorhg-corsage\",\n                    \"_rev\": \"1-970b9f1e72dd20fcbe47da0bed5f8a02\"\n                }\n            },\n            {\n                \"id\": \"sailorhg-kit\",\n                \"key\": \"sailorhg-kit\",\n                \"value\": {\n                    \"rev\": \"1-9d7dece528a93f295ab5ffa9f8746b98\"\n                },\n                \"doc\": {\n                    \"maker\": \"sailorhg\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567056-142c1c80-aa33-11e9-8682-10065d338145.png\",\n                    \"url\": \"https://twitter.com/sailorhg/status/1090122822007963648\",\n                    \"title\": \"Pastel hardware kit\",\n                    \"description\": \"Pastel hardware kits complete with custom manufactured pastel alligator clips.\",\n                    \"_id\": \"sailorhg-kit\",\n                    \"_rev\": \"1-9d7dece528a93f295ab5ffa9f8746b98\"\n                }\n            },\n            {\n                \"id\": \"sailorhg-led\",\n                \"key\": \"sailorhg-led\",\n                \"value\": {\n                    \"rev\": \"1-4c64253433480f1e26c460fc3f84e9a2\"\n                },\n                \"doc\": {\n                    \"maker\": \"sailorhg\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567052-13938600-aa33-11e9-9a88-cd842073ba44.jpg\",\n                    \"url\": \"https://twitter.com/sailorhg/status/1090117277540745216\",\n                    \"title\": \"Heart-shaped LED\",\n                    \"description\": \"custom molded heart shaped LED with sprinkles.\",\n                    \"_id\": \"sailorhg-led\",\n                    \"_rev\": \"1-4c64253433480f1e26c460fc3f84e9a2\"\n                }\n            },\n            {\n                \"id\": \"selinazawacki-moon\",\n                \"key\": \"selinazawacki-moon\",\n                \"value\": {\n                    \"rev\": \"1-265e0a6f3c5e956589b21203c4369f9e\"\n                },\n                \"doc\": {\n                    \"maker\": \"selinazawacki\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567057-142c1c80-aa33-11e9-9781-9e442418eaab.png\",\n                    \"url\": \"https://www.instagram.com/p/BFktVYPinKQ/\",\n                    \"title\": \"Holographic Dark Moon Necklace\",\n                    \"description\": \"Not sure if I'll be making more, get it while I have it in the store.\",\n                    \"_id\": \"selinazawacki-moon\",\n                    \"_rev\": \"1-265e0a6f3c5e956589b21203c4369f9e\"\n                }\n            },\n            {\n                \"id\": \"selinazawacki-shirt\",\n                \"key\": \"selinazawacki-shirt\",\n                \"value\": {\n                    \"rev\": \"1-f0564764a070c2b61b16c080da2c56a0\"\n                },\n                \"doc\": {\n                    \"maker\": \"selinazawacki\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567058-142c1c80-aa33-11e9-89fb-b4f30d84d69d.png\",\n                    \"url\": \"https://www.instagram.com/p/BEXlpiZCnJ3/\",\n                    \"title\": \"Floppy Crop\",\n                    \"description\": \"Used up the Diskette fabric today to make 2 of these crops.\",\n                    \"_id\": \"selinazawacki-shirt\",\n                    \"_rev\": \"1-f0564764a070c2b61b16c080da2c56a0\"\n                }\n            },\n            {\n                \"id\": \"selinazawacki-soi-pins\",\n                \"key\": \"selinazawacki-soi-pins\",\n                \"value\": {\n                    \"rev\": \"1-b52d06b84bb274f7dc3572b54487dc80\"\n                },\n                \"doc\": {\n                    \"maker\": \"selinazawacki\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567059-142c1c80-aa33-11e9-939b-2ecf4492786d.png\",\n                    \"url\": \"https://www.instagram.com/p/BNm6hZzDoEF/\",\n                    \"title\": \"Sick of the Internet Pins\",\n                    \"description\": \"Still some time to enter the pin/sticker giveaway! \",\n                    \"_id\": \"selinazawacki-soi-pins\",\n                    \"_rev\": \"1-b52d06b84bb274f7dc3572b54487dc80\"\n                }\n            },\n            {\n                \"id\": \"selinazawacki-soi-shirt\",\n                \"key\": \"selinazawacki-soi-shirt\",\n                \"value\": {\n                    \"rev\": \"1-131198d6157eb85a76c2ae32aa006ae3\"\n                },\n                \"doc\": {\n                    \"maker\": \"selinazawacki\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567060-142c1c80-aa33-11e9-8188-5a4803844a9e.png\",\n                    \"url\": \"https://www.instagram.com/p/BNvESj-j8PI/\",\n                    \"title\": \"Black Sweatshirt\",\n                    \"description\": \"Black sweatshirt hoody with the Sick of the Internet logo.\",\n                    \"_id\": \"selinazawacki-soi-shirt\",\n                    \"_rev\": \"1-131198d6157eb85a76c2ae32aa006ae3\"\n                }\n            },\n            {\n                \"id\": \"vogueandcode-hipster-dev-bro\",\n                \"key\": \"vogueandcode-hipster-dev-bro\",\n                \"value\": {\n                    \"rev\": \"1-546d90d3bae742a795991266570efaea\"\n                },\n                \"doc\": {\n                    \"maker\": \"vogueandcode\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567061-14c4b300-aa33-11e9-9fee-63ff2c0c9823.png\",\n                    \"url\": \"https://www.vogueandcode.com/shop/hipster-dev-bro\",\n                    \"title\": \"Hipster Dev\",\n                    \"description\": \"Hipster Dev is busy coding away while styled in a camo jacket and orange beanie.\",\n                    \"_id\": \"vogueandcode-hipster-dev-bro\",\n                    \"_rev\": \"1-546d90d3bae742a795991266570efaea\"\n                }\n            },\n            {\n                \"id\": \"vogueandcode-pretty-girls-code-tee\",\n                \"key\": \"vogueandcode-pretty-girls-code-tee\",\n                \"value\": {\n                    \"rev\": \"1-0bb9d1f16af7faa7e111ad02909742f3\"\n                },\n                \"doc\": {\n                    \"maker\": \"vogueandcode\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567062-14c4b300-aa33-11e9-9dcd-8bfed4ece810.png\",\n                    \"url\": \"https://www.vogueandcode.com/shop/pretty-girls-code-tee\",\n                    \"title\": \"Pretty Girls Code Tee\",\n                    \"description\": \"Everyone’s favorite design is finally here on a tee! The Pretty Girls Code crew-neck tee is available in a soft pink with red writing.\",\n                    \"_id\": \"vogueandcode-pretty-girls-code-tee\",\n                    \"_rev\": \"1-0bb9d1f16af7faa7e111ad02909742f3\"\n                }\n            },\n            {\n                \"id\": \"vogueandcode-ruby-sis-2\",\n                \"key\": \"vogueandcode-ruby-sis-2\",\n                \"value\": {\n                    \"rev\": \"2-45f3a19cd605e04c67af400d0164dc9e\"\n                },\n                \"doc\": {\n                    \"maker\": \"vogueandcode\",\n                    \"title\": \"Ruby Sista\",\n                    \"description\": \"Styled in a dashiki, Ruby Sis is listening to music while coding in her favorite language, Ruby!\",\n                    \"img\": \"https://user-images.githubusercontent.com/41929050/61567063-14c4b300-aa33-11e9-8515-bcb866da9ea3.png\",\n                    \"url\": \"https://www.vogueandcode.com/shop/ruby-sis-2\",\n                    \"_id\": \"vogueandcode-ruby-sis-2\",\n                    \"_rev\": \"2-45f3a19cd605e04c67af400d0164dc9e\"\n                }\n            }\n        ],\n        \"table\": \"Products\",\n        \"retrieved\": \"2020-05-20T15:43:45.830Z\"\n    }\n}"
				}
			]
		},
		{
			"name": "5_delete-product",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1rUkNSak01T1RFeU9VTTNNekl3TVRRd01UaEVOVEJDUmpJME9UY3dPRGN3UTBJeFFUTkVRdyJ9.eyJpc3MiOiJodHRwczovL2luZmluaXR5YXJjLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJQcHlYbzB3Y3NrS0tuNnlmZm9Eb2tRSTdHN3NXNjU2SkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9zYW5sYW1pbmRpZS1kZW1vLWFwaSIsImlhdCI6MTU4OTk5NDUzMiwiZXhwIjoxNTkwMDgwOTMyLCJhenAiOiJQcHlYbzB3Y3NrS0tuNnlmZm9Eb2tRSTdHN3NXNjU2SiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.qehxlgzlFKO_0aIa5HpnArtCvxElTmNk8W3VnHSorC4bxf7A5UPgPf3qIQK_xcQDolISXxU-is4vM7OHa0uaA4-AEajHWAu_XWKn6FcTD47GGytXEEkj_PS02ca7QSc24ofElRYA2lExyqUFjwuF0RxprvcppCOc1tIfQUw_aiNMPXgi_RsHGEbFMyMUKl0VVyhD7XVa_j3LT0yf6UBtyO3TEDeYp2mOkh_3eaiG_U7qqM584QgduXsjlj73_O50iO-argfwuGxAFfAFHjzeJO-QrWaAjEVUVMziSlYJiXU3xcRiSjyF7m5YOgrSWFbl2jTGHbX5Z7u_w0MnJExSig",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/products/?id=vogueandcode-hipster-dev-bro",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products",
						""
					],
					"query": [
						{
							"key": "id",
							"value": "vogueandcode-hipster-dev-bro"
						}
					]
				}
			},
			"response": [
				{
					"name": "5_delete-product",
					"originalRequest": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/api/products/?id=vogueandcode-hipster-dev-bro",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"products",
								""
							],
							"query": [
								{
									"key": "id",
									"value": "vogueandcode-hipster-dev-bro"
								}
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "1259"
						},
						{
							"key": "ETag",
							"value": "W/\"4eb-IkiFwM7b9VSxJfHg8VDVcM3eZOI\""
						},
						{
							"key": "Date",
							"value": "Wed, 20 May 2020 17:12:00 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						}
					],
					"cookie": [],
					"body": "{\n    \"path\": \"/api/products/\",\n    \"query\": {\n        \"id\": \"vogueandcode-hipster-dev-bro\"\n    },\n    \"headers\": {\n        \"authorization\": \"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1rUkNSak01T1RFeU9VTTNNekl3TVRRd01UaEVOVEJDUmpJME9UY3dPRGN3UTBJeFFUTkVRdyJ9.eyJpc3MiOiJodHRwczovL2luZmluaXR5YXJjLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJQcHlYbzB3Y3NrS0tuNnlmZm9Eb2tRSTdHN3NXNjU2SkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9zYW5sYW1pbmRpZS1kZW1vLWFwaSIsImlhdCI6MTU4OTk5NDUzMiwiZXhwIjoxNTkwMDgwOTMyLCJhenAiOiJQcHlYbzB3Y3NrS0tuNnlmZm9Eb2tRSTdHN3NXNjU2SiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.qehxlgzlFKO_0aIa5HpnArtCvxElTmNk8W3VnHSorC4bxf7A5UPgPf3qIQK_xcQDolISXxU-is4vM7OHa0uaA4-AEajHWAu_XWKn6FcTD47GGytXEEkj_PS02ca7QSc24ofElRYA2lExyqUFjwuF0RxprvcppCOc1tIfQUw_aiNMPXgi_RsHGEbFMyMUKl0VVyhD7XVa_j3LT0yf6UBtyO3TEDeYp2mOkh_3eaiG_U7qqM584QgduXsjlj73_O50iO-argfwuGxAFfAFHjzeJO-QrWaAjEVUVMziSlYJiXU3xcRiSjyF7m5YOgrSWFbl2jTGHbX5Z7u_w0MnJExSig\",\n        \"user-agent\": \"PostmanRuntime/7.24.1\",\n        \"accept\": \"*/*\",\n        \"cache-control\": \"no-cache\",\n        \"host\": \"localhost:3000\",\n        \"accept-encoding\": \"gzip, deflate, br\",\n        \"connection\": \"keep-alive\"\n    },\n    \"name\": \"HttpOkResponse\",\n    \"status\": 200,\n    \"statusText\": \"Ok\",\n    \"Ok\": true,\n    \"message\": \"Requested fulfilled with no errors.\",\n    \"body\": {\n        \"ok\": true,\n        \"id\": \"vogueandcode-hipster-dev-bro\",\n        \"rev\": \"2-5fddc001d9f911defbda0dcec56be4a2\"\n    }\n}"
				}
			]
		},
		{
			"name": "6-upsert-request",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1rUkNSak01T1RFeU9VTTNNekl3TVRRd01UaEVOVEJDUmpJME9UY3dPRGN3UTBJeFFUTkVRdyJ9.eyJpc3MiOiJodHRwczovL2luZmluaXR5YXJjLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZWMyY2ZhNzhiMjM5ZDBiZmU3MTMxNjgiLCJhdWQiOlsiaHR0cHM6Ly9zYW5sYW1pbmRpZS1kZW1vLWFwaSIsImh0dHBzOi8vaW5maW5pdHlhcmMuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTU4OTk4NDQyMCwiZXhwIjoxNTkwMDcwODIwLCJhenAiOiJjYVBTeDg0a0dGNGZSQ0x0VjNTU0todmduUVJGcmNPUCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.uLcOC2SNlcOCsXh91siKuglZgPInMucXaOR7djtDVPs9Pgkwhu-mZGZVYW1Qyv4xwz3AahA0DVvM7MKQufABcJLoNzkGZlQZTJ9vKvzzAcQrvuBe-upTVeO4qn1hgyxR3zhuMWjMSATsoNiWCalalSYiY6wWknjfkYDMsGAHL-EWlxCWzj3dp4XelXB5GckCG7ml8CD0NGhaTUxSC_zbnNgU6W5L5gtTF8R2KWpHNPffHf84mLIS6rHBRfzNLTcICcdzlpfso_fEad0U5NURK26LoKS5BRNJuVtbfAwCKV-ZLbk1U984Gd6ViYPZcwCdGWrauuKdMQo4gkBXzmqOTA",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"_id\": \"vogueandcode-pretty-girls-code-tee\",\n  \"maker\": \"vogueandcodeasd\",\n  \"title\": \"Pretty Girls Code Tee Pink\",\n  \"description\": \"Everyone’s favorite design is finally here on a tee! The Pretty Girls Code crew-neck tee is available in a soft pink with red writing.\",\n  \"img\": \"https://user-images.githubusercontent.com/41929050/61567062-14c4b300-aa33-11e9-9dcd-8bfed4ece810.png\",\n  \"url\": \"https://www.vogueandcode.com/shop/pretty-girls-code-tee\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/products",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products"
					]
				},
				"description": "Upsert is a insert of not exist\n\nUpdate if exists"
			},
			"response": [
				{
					"name": "6-upsert-request",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"_id\": \"vogueandcode-pretty-girls-code-tee\",\n  \"maker\": \"vogueandcodeasd\",\n  \"title\": \"Pretty Girls Code Tee Pink\",\n  \"description\": \"Everyone’s favorite design is finally here on a tee! The Pretty Girls Code crew-neck tee is available in a soft pink with red writing.\",\n  \"img\": \"https://user-images.githubusercontent.com/41929050/61567062-14c4b300-aa33-11e9-9dcd-8bfed4ece810.png\",\n  \"url\": \"https://www.vogueandcode.com/shop/pretty-girls-code-tee\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/api/products",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"products"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "1340"
						},
						{
							"key": "ETag",
							"value": "W/\"53c-wLQNQtSV8A5PDCqB/a9/mLSzLXs\""
						},
						{
							"key": "Date",
							"value": "Wed, 20 May 2020 17:21:43 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						}
					],
					"cookie": [],
					"body": "{\n    \"path\": \"/api/products\",\n    \"query\": {},\n    \"headers\": {\n        \"authorization\": \"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1rUkNSak01T1RFeU9VTTNNekl3TVRRd01UaEVOVEJDUmpJME9UY3dPRGN3UTBJeFFUTkVRdyJ9.eyJpc3MiOiJodHRwczovL2luZmluaXR5YXJjLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZWMyY2ZhNzhiMjM5ZDBiZmU3MTMxNjgiLCJhdWQiOlsiaHR0cHM6Ly9zYW5sYW1pbmRpZS1kZW1vLWFwaSIsImh0dHBzOi8vaW5maW5pdHlhcmMuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTU4OTk4NDQyMCwiZXhwIjoxNTkwMDcwODIwLCJhenAiOiJjYVBTeDg0a0dGNGZSQ0x0VjNTU0todmduUVJGcmNPUCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.uLcOC2SNlcOCsXh91siKuglZgPInMucXaOR7djtDVPs9Pgkwhu-mZGZVYW1Qyv4xwz3AahA0DVvM7MKQufABcJLoNzkGZlQZTJ9vKvzzAcQrvuBe-upTVeO4qn1hgyxR3zhuMWjMSATsoNiWCalalSYiY6wWknjfkYDMsGAHL-EWlxCWzj3dp4XelXB5GckCG7ml8CD0NGhaTUxSC_zbnNgU6W5L5gtTF8R2KWpHNPffHf84mLIS6rHBRfzNLTcICcdzlpfso_fEad0U5NURK26LoKS5BRNJuVtbfAwCKV-ZLbk1U984Gd6ViYPZcwCdGWrauuKdMQo4gkBXzmqOTA\",\n        \"content-type\": \"application/json\",\n        \"user-agent\": \"PostmanRuntime/7.24.1\",\n        \"accept\": \"*/*\",\n        \"cache-control\": \"no-cache\",\n        \"host\": \"localhost:3000\",\n        \"accept-encoding\": \"gzip, deflate, br\",\n        \"connection\": \"keep-alive\",\n        \"content-length\": \"458\"\n    },\n    \"name\": \"HttpOkResponse\",\n    \"status\": 200,\n    \"statusText\": \"Ok\",\n    \"Ok\": true,\n    \"message\": \"Requested fulfilled with no errors.\",\n    \"body\": {\n        \"ok\": true,\n        \"id\": \"vogueandcode-pretty-girls-code-tee\",\n        \"rev\": \"6-dc243e344a4509a1a2b97099e269ecf4\"\n    }\n}"
				}
			]
		}
	],
	"protocolProfileBehavior": {}
}
```