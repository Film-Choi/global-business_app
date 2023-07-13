import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["ko"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: ["일", "월", "화", "수", "목", "금", "토"],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
};

LocaleConfig.defaultLocale = "ko";

const CalendarView = () => {
  const [events, setEvents] = useState([]);
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/calendar/v3/calendars/kusgbcalendar@gmail.com/events?key=AIzaSyBEtwTS9LToZ9hHWpPjw2zrbLRjHzvTARg"
      );
      const data = await response.json();
      setEvents(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const updatedMarkedDates = events.reduce((acc, event) => {
      const date = event.start.date || event.start.dateTime.split("T")[0];
      return {
        ...acc,
        [date]: {
          selected: true,
          selectedColor: "red",
        },
      };
    }, {});
    setMarkedDates(updatedMarkedDates);
  }, [events]);

  const handleDatePress = (date) => {
    const selectedDate = date.dateString;
    const selectedEvents = events.filter((event) => {
      const eventDate = event.start.date || event.start.dateTime.split("T")[0];
      return eventDate === selectedDate;
    });
    setSelectedDate(selectedDate);
    setSelectedEvents(selectedEvents);
  };

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={markedDates}
        onDayPress={handleDatePress}
        theme={{
          textSectionTitleColor: "#000000",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "blue",
          dayTextColor: "#2d4150",

          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "#00adf5",
          monthTextColor: "brown",
          indicatorColor: "blue",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 14,
          "stylesheet.calendar.header": {
            dayHeader: {
              fontWeight: "bold",
              fontSize: 14,
              color: "#000000",
              textTransform: "uppercase",
            },
          },
          "stylesheet.calendar.main": {
            week: {
              marginTop: 7,
              marginBottom: 7,
              flexDirection: "row",
              justifyContent: "space-around",
            },
          },
          "stylesheet.calendar.day": {
            today: {
              color: "#00adf5",
              fontWeight: "bold",
            },
          },
        }}
        style={styles.calendar}
      />
      {selectedDate !== "" && (
        <View style={styles.eventsContainer}>
          <Text style={styles.dateText}>
            {selectedDate.slice(5, 7)}월 {selectedDate.slice(8, 10)}일
          </Text>
          {selectedEvents.map((event, index) => (
            <Text key={index} style={styles.eventText}>
              {event.summary}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  calendar: {
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "brown",
  },
  eventsContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  dateText: {
    fontSize: 20,
    color: "brown",
    fontWeight: "bold",
    marginBottom: 20,
  },
  eventText: {
    paddingVertical: 20,
    backgroundColor: "#E2E2E2",
    fontSize: 16,
    marginBottom: 10,
    width: "90%",
    textAlign: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});

export default CalendarView;
