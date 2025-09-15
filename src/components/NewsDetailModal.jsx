import { Modal, ModalContent, ModalHeader, ModalTitle } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import graduationCeremony from "@/assets/graduation-ceremony.jpg";
import researchLab from "@/assets/research-lab.jpg";
import trainingFacility from "@/assets/training-facility.jpg";

const NewsDetailModal = ({ isOpen, onClose, article }) => {
  if (!article) return null;

  const getArticleImage = (title) => {
    if (title.includes("Graduates")) return graduationCeremony;
    if (title.includes("Research") || title.includes("Technology")) return researchLab;
    return trainingFacility;
  };

  const getFullContent = (title) => {
    if (title.includes("Graduates")) {
      return `
        The Defense Academy of Technology proudly graduated its largest class of 500 officers in a magnificent ceremony held at the academy's main parade ground. This historic milestone represents not only the growth of our institution but also our commitment to producing highly qualified military leaders for our nation's defense.

        The ceremony was attended by distinguished guests including the Chief of Defense Staff, regional military commanders, and families of the graduating officers. The graduates represent diverse specializations across all military branches, with notable achievements in cybersecurity, aerospace engineering, and strategic defense studies.

        Among this year's graduates, 45% are women, marking a significant milestone in military education diversity. The class includes 12 international students from allied nations, strengthening diplomatic and military cooperation across the region.

        Colonel Sarah Mitchell, Academy Commandant, delivered the keynote address, emphasizing the graduates' role in addressing modern security challenges. "These officers are not just military professionals; they are innovators, diplomats, and leaders who will shape the future of defense," she stated.

        The graduating class achieved remarkable academic excellence, with an average GPA of 3.7 and 23 students graduating summa cum laude. Their capstone projects included cutting-edge research in artificial intelligence applications for defense, sustainable military operations, and next-generation communication systems.

        As these officers begin their service, they carry with them the academy's core values of honor, integrity, excellence, and innovation. Many will be stationed at strategic locations worldwide, contributing to peacekeeping missions, training programs, and technological advancement initiatives.
      `;
    } else if (title.includes("Cybersecurity")) {
      return `
        The Defense Academy of Technology unveiled its state-of-the-art Cybersecurity Research Center, a $15 million facility dedicated to advancing national cybersecurity capabilities and training the next generation of cyber defense professionals.

        The 10,000 square foot center features advanced simulation laboratories, secure testing environments, and collaborative research spaces where faculty and students work on real-world cybersecurity challenges. The facility includes specialized equipment for penetration testing, malware analysis, and digital forensics.

        Dr. Michael Zhang, Director of the Cybersecurity Research Center, highlighted the facility's mission: "In an era where digital threats evolve daily, this center positions our academy at the forefront of cyber defense education and research. Our students will graduate with hands-on experience in protecting critical infrastructure and national security assets."

        The center's inaugural research projects focus on artificial intelligence-enhanced threat detection, quantum-resistant encryption methods, and advanced persistent threat mitigation strategies. These projects are conducted in partnership with leading technology companies and government agencies.

        Students in the Military Technology & Engineering program will have access to the center's resources as part of their curriculum, participating in real-time threat simulation exercises and contributing to ongoing research initiatives. The center also offers specialized certification programs for active military personnel.

        International collaboration is a key component of the center's mission, with planned partnerships with cybersecurity institutions in allied nations. This global perspective ensures that graduates are prepared to address cybersecurity challenges on an international scale.
      `;
    }
    
    return `
      ${article.excerpt} This comprehensive coverage provides detailed insights into the latest developments at the Defense Academy of Technology.

      Our institution continues to lead in military education innovation, combining traditional military values with cutting-edge technology and modern pedagogical approaches. Each initiative represents our commitment to excellence and our dedication to preparing future military leaders.

      The academy's strategic initiatives align with national defense priorities while maintaining our focus on developing well-rounded officers who can adapt to evolving security challenges. Our programs emphasize critical thinking, ethical leadership, and technological proficiency.

      Faculty members bring extensive experience from military service, academic research, and industry partnerships, ensuring that students receive practical, relevant education that prepares them for real-world challenges.

      As we continue to expand our capabilities and enhance our programs, the Defense Academy remains committed to its founding mission: developing exceptional military leaders who will serve with distinction and contribute to national security and global peace.
    `;
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Graduation": return "default";
      case "Research": return "secondary";
      case "Events": return "outline";
      case "Awards": return "destructive";
      case "Technology": return "secondary";
      default: return "outline";
    }
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <ModalHeader>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant={getCategoryColor(article.category)}>{article.category}</Badge>
            {article.featured && <Badge className="bg-accent text-accent-foreground">Featured</Badge>}
          </div>
          <ModalTitle className="text-2xl text-primary leading-tight">
            {article.title}
          </ModalTitle>
        </ModalHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Academy Communications</span>
            </div>
          </div>

          <img 
            src={getArticleImage(article.title)} 
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg"
          />

          <div className="prose prose-lg max-w-none">
            {getFullContent(article.title).split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          <div className="bg-gradient-subtle p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-3">About Defense Academy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The Defense Academy of Technology is Nigeria's premier military education institution, 
              dedicated to developing strategic leaders and advancing defense technologies. Since 1978, 
              we have graduated over 15,000 officers who serve with distinction worldwide.
            </p>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default NewsDetailModal;


