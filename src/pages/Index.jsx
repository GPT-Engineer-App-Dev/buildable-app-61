import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <Card className="w-[300px] mx-auto">
      <CardHeader className="flex items-center">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://example.com/avatar.jpg" alt="Profile avatar" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold text-center mb-2">User Name</h2>
        <p className="text-center text-gray-600 mb-4">Age: 25</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <Badge>Interest 1</Badge>
          <Badge variant="secondary">Interest 2</Badge>
          <Badge variant="outline">Interest 3</Badge>
        </div>
        <p className="text-center text-gray-700">
          This is a brief bio about the user. You can customize this text to describe the person's background, interests, or any other relevant information.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Connect</Button>
      </CardFooter>
    </Card>
  );
};

export default Profile;