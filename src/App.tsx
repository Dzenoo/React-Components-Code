import { Card, CardContent } from "./components/Card/card";
import { Form, FormInfo, FormItem } from "./components/Form/form";
import { Input } from "./components/Input/input";

function App() {
  return (
    <div className="p-6">
      <Card additionalClasses="w-60">
        <CardContent>
          <Form>
            <FormItem>
              <Input label="Name" placeholder="Enter Name" />
            </FormItem>
            <FormInfo>Please enter valid text</FormInfo>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
