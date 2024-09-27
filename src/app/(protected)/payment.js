import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Payment() {
    const [valor, setValor] = useState("0,00");
    const [sugestoes, setSugestoes] = useState([{
        "id": 1,
        "nome": "Jeep Wrangler"
    }, {
        "id": 2,
        "nome": "Toyota Land Cruiser"
    }, {
        "id": 3,
        "nome": "Ford Bronco"
    }, {
        "id": 4,
        "nome": "Land Rover Defender"
    }, {
        "id": 5,
        "nome": "Mercedes-Benz G-Class"
    }, {
        "id": 6,
        "nome": "Chevrolet Colorado ZR2"
    }, {
        "id": 7,
        "nome": "Nissan Patrol"
    }, {
        "id": 8,
        "nome": "Suzuki Jimny"
    }, {
        "id": 9,
        "nome": "Ford F-150 Raptor"
    }, {
        "id": 10,
        "nome": "Ram 1500 TRX"
    }, {
        "id": 11,
        "nome": "Toyota 4Runner"
    }, {
        "id": 12,
        "nome": "Mitsubishi Pajero"
    }, {
        "id": 13,
        "nome": "Jeep Gladiator"
    }, {
        "id": 14,
        "nome": "Chevrolet Silverado ZR2"
    }, {
        "id": 15,
        "nome": "Toyota Tacoma TRD Pro"
    }, {
        "id": 16,
        "nome": "Ford Ranger Raptor"
    }, {
        "id": 17,
        "nome": "GMC Sierra AT4"
    }, {
        "id": 18,
        "nome": "Isuzu D-Max"
    }, {
        "id": 19,
        "nome": "Mahindra Thar"
    }, {
        "id": 20,
        "nome": "Hummer EV"
    }, {
        "id": 21,
        "nome": "Lexus GX"
    }, {
        "id": 22,
        "nome": "Volkswagen Amarok"
    }, {
        "id": 23,
        "nome": "Honda Ridgeline"
    }, {
        "id": 24,
        "nome": "BMW X5"
    }, {
        "id": 25,
        "nome": "Jeep Grand Cherokee"
    }, {
        "id": 26,
        "nome": "Toyota Sequoia"
    }, {
        "id": 27,
        "nome": "Subaru Outback"
    }, {
        "id": 28,
        "nome": "Audi Q7"
    }, {
        "id": 29,
        "nome": "Hyundai Palisade"
    }, {
        "id": 30,
        "nome": "Volvo XC90"
    }, {
        "id": 31,
        "nome": "Kia Telluride"
    }, {
        "id": 32,
        "nome": "Genesis GV80"
    }, {
        "id": 33,
        "nome": "Jaguar F-Pace"
    }, {
        "id": 34,
        "nome": "Porsche Cayenne"
    }, {
        "id": 35,
        "nome": "Range Rover Sport"
    }]);
    const [id, setId] = useState(1);
    const [data, setData] = useState(new Date());
    const [viewCalendar, setViewCalendar] = useState(false)
    const [observacao, setObservacao] = useState("");

    const handleCalendar = (event, selectedDate) => {
        setViewCalendar(false);
        setData(selectedDate);
    }

    return (
        <View style={styles.content}>
            <Text>Inserir Pagamentos</Text>
            <View style={styles.inputView}>
                <Ionicons name="wallet-outline" size={24} color="black" />
                <TextInput
                    placeholder="Valor"
                    keyboardType="decimal-pad"
                    style={styles.inputValor}
                    value={valor}
                    onChangeText={setValor}
                />
            </View>
            <View style={styles.inputView}>
                <Picker
                    selectedValue={id}
                    onValueChange={(itemValue, index) => {
                        setId(itemValue)
                    }}
                    style={{ width: "100%" }}
                >
                    {sugestoes?.map((item) => {
                        return <Picker.Item key={item.id} label={item.nome} value={item.id} />
                    })}
                </Picker>
            </View>
            <View style={styles.inputView}>
                <Text onPress={() => setViewCalendar(true)} style={styles.inputData}>
                    {data.toLocaleDateString().split("T")[0]}
                </Text>
                {viewCalendar && (
                    <DateTimePicker
                        value={data}
                        onChange={handleCalendar}
                        mode="date"
                        testID="dateTimePicker"
                    />
                )}
            </View>
            <View style={styles.inputView}>
                <TextInput
                    placeholder="Observações"
                    style={styles.inputObservacao}
                    value={observacao}
                    onChangeText={setObservacao}
                    multiline={true}
                />
            </View>
            <View style={styles.contentButton}>
                <Button title="Salvar" />
                <Button title="Continuar" />
                <Button title="Cancelar" onPress={() => router.back()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    inputView: {
        borderColor: "black",
        borderWidth: 1,
        width: "100%",
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
    },
    contentButton: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around"

    },
    inputValor: {
        flex: 1,
        textAlign: "right",
        padding: 10,
    },
    inputData: {
        width: "100%",
        textAlign: "center",
        fontFamily: "regular",
        fontSize: 20,
        padding: 10,
    },
    inputObservacao: {
        fontFamily: "regular",
        fontSize: 16,
        flex: 1,
        lineHeight: 20,
    },
})