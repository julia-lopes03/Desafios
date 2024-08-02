
users_tweet= input("What's happening? " ) #aqui é onde a pessoa vai digitar
len_tweet = len(users_tweet) #aqui vc declara que o tamanho do texto é do tamanho do users tweet.O len conta as strings
max_len = 140 #

if len_tweet <= max_len:
    print("TWEET")
else:
    print("MUTE")    


