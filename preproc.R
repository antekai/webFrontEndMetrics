#loading required libraries
lib=c("flexdashboard","lubridate","xts",
      "htmlwidgets","dygraphs","googlesheets","DT")
sapply(lib,require,character.only=T)

#parsing googlesheet data
gsraw=gs_url("https://docs.google.com/spreadsheets/d/1cu5ZoZX9X6a9oZ6aPEP5w_CBuTVJ8sitikwJiEzeQ6U/pubhtml")
df=gs_read_listfeed(gsraw,na.strings=c("?",""))
names(df)[2]="registered"

#preprocess data.frame
df$Date=as.Date(dmy(df$Date))#library(lubridate) #parsing dates
rsvpTS=xts(df[,2:6],order.by=df$Date) #library(xts) #convert to time series

