# backend node

BASE-URL

```URL
https://localhost:3333
```
- **/calculate /**
    - post
        
      - Corpo da requisição
        
        ```json
        {
          "plan": "FaleMais60",
          "origin": "011",
          "destiny": "018",
          "minute": "80"
        }
        ```

        - Retorno da requisão - 200 (OK)
        
        ```json
        {
          "plan": "FaleMais60",
          "value": "72",
          "valuewithplan": "19.8"
        }
        ```
---

run
 ``` sh
  docker-compose up # start constainer

  docker exec -it telzir_back npx prisma 
migrate dev #run prisma

  docker exec -it telzir_back npx prisma db seed #populate database
```