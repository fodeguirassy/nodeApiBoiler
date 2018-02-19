#Routes

    #Register

        #Facebook
        GET -> auth/facebook

        #Google
        GET -> auth/google

        #local
        POST -> /user/


    #Authenticate
        #local
        POST -> /auth/login

        #Facebook & Google
        GET -> /authenticate


    #user

        #GET ALL
        GET -> user/


