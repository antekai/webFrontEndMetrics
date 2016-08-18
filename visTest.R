#interactive data table
datatable(df)

#time-series visualization
#chart1
dygraph(rsvpTS[,c(1,4,5)],main = "Attendants") %>%
  dyRangeSelector(dateWindow = c("2016-01-01", "2016-08-17")) %>%
  dyOptions(connectSeparatedPoints = TRUE,
            colors = RColorBrewer::brewer.pal(3, "Set2")) %>%
  dySeries("rsvp",strokeWidth = 2, strokePattern = "dashed")%>%
  dySeries("Total",stepPlot = TRUE, fillGraph = TRUE)
#chart2
dygraph(rsvpTS[,c(2:3)]) %>%
  dyRangeSelector(dateWindow = c("2016-01-01", "2016-08-17")) %>%
  dyOptions(connectSeparatedPoints = TRUE,stackedGraph = TRUE,
            colors = RColorBrewer::brewer.pal(3, "Set1")) 